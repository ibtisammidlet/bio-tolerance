package com.cutthecord.commands.commands;

import com.cutthecord.commands.RawMsgHandler;
import com.discord.stores.StoreStream;

import java.lang.reflect.Method;


public class CmdSpoilerImg implements RawMsgHandler {

    @Override
    public String processRawMessage(String orig) {
        try {
            // Added by Supplemental patch
            //noinspection JavaReflectionMemberAccess
            final Method m = StoreStream.getUserSettings().getClass().getDeclaredMethod("setImageSpoiler", boolean.class);
            m.invoke(StoreStream.getUserSettings(), true);
        } catch (Exception e) {
            System.out.println("Failed to call StoreStream.getUserSettings().setImageSpoiler(true)");
            e.printStackTrace();
        }
        return orig;
    }

}
