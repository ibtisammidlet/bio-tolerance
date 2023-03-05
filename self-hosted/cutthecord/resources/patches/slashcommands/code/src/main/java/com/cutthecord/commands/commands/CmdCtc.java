package com.cutthecord.commands.commands;

import com.cutthecord.commands.EnableDisableHandler;
import com.cutthecord.commands.RawMsgHandler;
import com.discord.stores.StoreStream;
import com.discord.stores.StoreUserSettings;

import java.lang.reflect.Method;

public class CmdCtc {


    // TODO make token calls write directly to clipboard
    // TODO make supplemental inject a interface so we can just cast instead of using reflection

    public static class CmdCtcChannelLeak implements EnableDisableHandler {

        @Override
        public String processEnableDisable(boolean enabled) {
            try {
                //noinspection JavaReflectionMemberAccess
                final Method m = StoreStream.getUserSettings().getClass().getDeclaredMethod("setLeakChannels", boolean.class);
                m.invoke(StoreStream.getUserSettings(), enabled);
            } catch (Exception e) {
                System.out.println("Failed to call StoreStream.getUserSettings().setLeakChannels");
                return "Failed to call StoreStream.getUserSettings().setLeakChannels";
            }
            return "CTC: Successfully set channelleak state."; // TODO use notification
        }

    }

    public static class CmdCtcShowTyping implements EnableDisableHandler {

        @Override
        public String processEnableDisable(boolean enabled) {

            try {
                //noinspection JavaReflectionMemberAccess
                final Method m = StoreStream.getUserSettings().getClass().getDeclaredMethod("setShowTyping", boolean.class);
                m.invoke(StoreStream.getUserSettings(), enabled);
            } catch (Exception e) {
                System.out.println("Failed to call StoreStream.getUserSettings().setShowTyping");
                e.printStackTrace();
            }

            return "CTC: Successfully set showtyping state."; // TODO use notification
        }

    }

    public static class CmdCtcNoDelete implements EnableDisableHandler {

        @Override
        public String processEnableDisable(boolean enabled) {

            try {
                //noinspection JavaReflectionMemberAccess
                final Method m = StoreStream.getUserSettings().getClass().getDeclaredMethod("setNoDelete", boolean.class);
                m.invoke(StoreStream.getUserSettings(), enabled);
            } catch (Exception e) {
                System.out.println("Failed to call StoreStream.getUserSettings().setNoDelete");
                e.printStackTrace();
            }

            return "CTC: Successfully set nodelete state."; // TODO use notification
        }

    }

    public static class CmdCtcGetToken implements RawMsgHandler {

        @Override
        public String processRawMessage(String orig) {
            try {
                //noinspection JavaReflectionMemberAccess
                final Method m = StoreStream.getUserSettings().getClass().getDeclaredMethod("getStoredToken");
                return (String) m.invoke(StoreStream.getUserSettings()); // TODO notification
            } catch (Exception e) {
                System.out.println("Failed to call StoreStream.getUserSettings().getStoredToken()");
                e.printStackTrace();
            }

            return "";
        }

    }

    public static class CmdCtcSetToken implements RawMsgHandler {

        @Override
        public String processRawMessage(String msg) {

            try {
                //noinspection JavaReflectionMemberAccess
                final Method m = StoreStream.getUserSettings().getClass().getDeclaredMethod("setStoredToken", String.class);
                m.invoke(StoreStream.getUserSettings(), msg);
            } catch (Exception e) {
                System.out.println("Failed to call StoreStream.getUserSettings().setStoredToken()");
                e.printStackTrace();
            }

            return "CTC: Successfully changed token. Please restart application.";
        }

    }

    public static class CmdCtcSwitchAccount implements RawMsgHandler {

        @Override
        public String processRawMessage(String msg) {
            String trim = msg.trim();
            StoreUserSettings userSettings = StoreStream.getUserSettings();

            try {
                //noinspection JavaReflectionMemberAccess
                final Method m1 = userSettings.getClass().getDeclaredMethod("getAccountToken", String.class);
                String accountToken = (String) m1.invoke(userSettings, trim);
                if (accountToken.startsWith("none")) {
                    return "CTC: No such account found.";
                }

                //noinspection JavaReflectionMemberAccess
                final Method m2 = userSettings.getClass().getDeclaredMethod("setStoredToken", String.class);
                m2.invoke(userSettings, accountToken);
                return "CTC: Successfully changed accounts. Please restart application.";
            } catch (Exception e) {
                e.printStackTrace();
            }

            return "";
        }

    }

    public static class CmdCtcAddAccount implements RawMsgHandler {//TODO

        @Override
        public String processRawMessage(String msg) {
            String substring3 = msg.substring(msg.indexOf(" "));
            String accName = msg.replace(substring3, "").trim();
            String accToken = substring3.trim();

            StoreUserSettings userSettings = StoreStream.getUserSettings();
            if (accName.startsWith("current")) {
                accName = StoreStream.getUsers().getMe().getUsername();
                accToken = StoreStream.getUsers().getMe().getToken();
            }

            try {
                final Method m = userSettings.getClass().getDeclaredMethod("setAccountToken", String.class, String.class);
                m.invoke(userSettings, accName, accToken);
            } catch (Exception e) {
                e.printStackTrace();
            }

            return "CTC: Added account.";
        }

    }

}
