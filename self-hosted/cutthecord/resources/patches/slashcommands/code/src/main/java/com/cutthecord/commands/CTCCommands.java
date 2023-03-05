package com.cutthecord.commands;

import com.cutthecord.commands.commands.CmdCtc;
import com.cutthecord.commands.commands.CmdEmojify;
import com.cutthecord.commands.commands.CmdOwo;
import com.cutthecord.commands.commands.CmdSpoilerImg;
import com.discord.api.commands.ApplicationCommandType;
import com.discord.api.commands.CommandChoice;
import com.discord.models.commands.ApplicationCommand;
import com.discord.models.commands.ApplicationCommandOption;
import com.discord.stores.BuiltInCommands;
import d0.z.d.m;
import d0.z.d.o;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@SuppressWarnings("SameParameterValue")
public class CTCCommands {

    static long ID = -100;

    // Helper class for replacements
    public static class StrPair {
        final String a;
        final String b;

        public StrPair(String a, String b) {
            this.a = a;
            this.b = b;
        }
    }

    // Need to inject a call at end of init for p0 to this class in BuiltinCommands.smali
    // Create commands
    @SuppressWarnings({"unused"})
    public static void CreateCTCCommands(BuiltInCommands builtIn) {
        // Used in command creation in BuiltinCommands, one more than the last reference

        // Add existing commands
        ArrayList<ApplicationCommand> commands = new ArrayList<>(builtIn.getBuiltInCommands());

        // Add our commands
        commands.add(createWrappedSlashCommand("st", "Puts a strikethrough the message", "Message", "~~", "~~")); // Strikethrough
        commands.add(createWrappedSlashCommand("bold", "Makes text bold", "Message", "**", "**")); // Bold
        commands.add(createWrappedSlashCommand("slap", "Slaps people with a large trout", "Message", "*Slaps ", " around a bit with a large trout.*")); // Slap

        commands.add(createReplaceTextSlashCommand("clap", "Please \uD83D\uDC4F clap", "Message", Collections.singletonList(new StrPair(" ", ":clap:")))); // Clap
        commands.add(createReplaceTextSlashCommand("flip", "Flips text (like “ʇɥıs”)", "Message", Replacements.FLIP)); // Flip
        commands.add(createReplaceTextSlashCommand("fw", "Makes text fullwidth (like “Ｓｅｎｔ　ｆｒｏｍ　ｍｙ　Ａｎｄｒｏｉｄ　Ｄｅｖｉｃｅ”)", "Message", Replacements.FULL_WIDTH)); // fw
        commands.add(createReplaceTextSlashCommand("morse", "Converts text into morse code", "Message", Replacements.MORSE, Case.UPPER)); // morse
        commands.add(createReplaceTextSlashCommand("gordon", "\uD835\uDDDB\uD835\uDDF2\uD835\uDDF9\uD835\uDDF9\uD835\uDDFC，\uD835\uDDDA\uD835\uDDFC\uD835\uDDFF\uD835\uDDF1\uD835\uDDFC\uD835\uDDFB！", "Message", Replacements.GORDON)); // gordon
        commands.add(createReplaceTextSlashCommand("small", "Makes text smaller (like “ᴛʜɪs”)", "Message", Replacements.SMALL, Case.LOWER)); // small
        commands.add(createReplaceTextSlashCommand("smaller", "Makes text even smaller (like “ᵗʰvˢ”)", "Message", Replacements.SMALLER, Case.LOWER)); // smaller
        //noinspection unchecked
        commands.add(createReplaceTextSlashCommand("upper", "Makes text uppercase", "Message", Collections.EMPTY_LIST, Case.UPPER)); // upper
        //noinspection unchecked
        commands.add(createReplaceTextSlashCommand("lower", "Makes text lowercase", "Message", Collections.EMPTY_LIST, Case.LOWER)); // lower

        commands.add(createAppendToEndCommand("lenny", "( ͡° ͜ʖ ͡°)", "Message", " ( \u0361\u00B0 \u035C\u0296 \u0361\u00B0)")); // lenny

        commands.add(createHandleRawMessageCommand("owo", "Myakes tyext reawwy owo-ly, nya :3", "Message", new CmdOwo())); // owo
        commands.add(createHandleRawMessageCommand("emojify", "Emojify text", "Message", new CmdEmojify())); // emojify
        commands.add(createHandleRawMessageCommand("spoilerimg", "Prepends SPOILER_ to names of all images attached to the message that starts with this, causing them to get marked as spoiler", "Message", new CmdSpoilerImg()));

        commands.add(createEnableDisableCommand("channelleak", "Shows all hidden channels", new CmdCtc.CmdCtcChannelLeak()));
        commands.add(createEnableDisableCommand("showtyping", "Change typing event so that its visible/not when you type", new CmdCtc.CmdCtcShowTyping()));
        commands.add(createEnableDisableCommand("nodelete", "Disables handling of message delete events", new CmdCtc.CmdCtcNoDelete()));
        commands.add(createHandleRawMessageCommand("gettoken", "Get current token, DO NOT USE IN PUBLIC", null, new CmdCtc.CmdCtcGetToken()));
        commands.add(createHandleRawMessageCommand("settoken", "Set current token, DO NOT USE IN PUBLIC", "Token", new CmdCtc.CmdCtcSetToken()));
        commands.add(createHandleRawMessageCommand("switchaccount", "Switch to specified account, DO NOT USE IN PUBLIC", "Name", new CmdCtc.CmdCtcSwitchAccount()));
        // TODO addaccount


        // Builtin list is non modifiable, lets hijack it instead :)
        try {
            Field commandListField = BuiltInCommands.class.getDeclaredField("builtInCommands");
            commandListField.setAccessible(true);
            commandListField.set(builtIn, commands);
        } catch (Exception e) {
            System.out.println("Failed to replace buildInCommands");
            e.printStackTrace();
        }

    }

    // Wrapper for naming
    public static class CTCCommand extends ApplicationCommand {
        public CTCCommand(String id, long applicationID, String name, String description, Integer descriptionRes, List<ApplicationCommandOption> options, boolean builtIn, Long guildId, String version, Boolean defaultPermissions, Map map, Function1 handler, int flags, DefaultConstructorMarker defaultConstructorMarker) {
            super(id, applicationID, name, description, descriptionRes, options, builtIn, guildId, version, defaultPermissions, map, handler, flags, defaultConstructorMarker);
        }
    }

    // Wrapper for naming
    public static ApplicationCommandOption makeOption(ApplicationCommandType type, String name, String description, Integer descriptionRes, boolean required, boolean defaultOpt, List<CommandChoice> choices, List<ApplicationCommandOption> options) {
        return new ApplicationCommandOption(type, name, description, descriptionRes, required, defaultOpt, choices, options);
    }

    // Wrapper for naming
    public static ApplicationCommandOption makeOption(ApplicationCommandType type, String name, String description, Integer descriptionRes, boolean required, boolean defaultOpt, List<CommandChoice> choices, List<ApplicationCommandOption> options, int flags, DefaultConstructorMarker marker) {
        return new ApplicationCommandOption(type, name, description, descriptionRes, required, defaultOpt, choices, options, flags, marker);
        /*
        Flags
        4   - description = null
        8   - descriptionRes = null
        64  - choices = null
        128 - options = null
         */
    }

    // Wrapper for naming
    public static ApplicationCommand makeCtcCommand(String name, String cmdDesc, List<ApplicationCommandOption> options, Function1<? super Map<String, ? extends Object>, String> handler) {
        m.checkNotNullParameter(name, "name");
        m.checkNotNullParameter(options, "options");
        return new CTCCommand(String.valueOf(ID--), -1L, name, cmdDesc, null, options, true, null, null, null, null, handler, 1936, null);
        /*
        Flags
        8    - description = null
        16   - descriptionRes = null
        64   - builtIn = false
        128  - guildID = null
        256  - version = null
        512  - defaultPermissions = false
        1024 - permissions = null
        2048 - handler = null

        1928 = 1024, 512, 256, 128, 8
        // Lets try 1936 for out purposes
         */
    }

    static final class WrapTextCommand extends o<String> implements Function1<Map<String, ?>, String> {
        public final String prefix;
        public final String suffix;

        public WrapTextCommand(String prefix, String suffix) {
            super(1);
            this.prefix = prefix;
            this.suffix = suffix;
        }

        public final String invoke(Map<String, ?> options) {
            m.checkNotNullParameter(options, "commandOptions");
            StringBuilder newMessage = new StringBuilder();
            newMessage.append(this.prefix);
            Object originalMessage = options.get("message");
            if (originalMessage == null) {
                originalMessage = "";
            }

            newMessage.append(originalMessage);
            newMessage.append(this.suffix);
            return newMessage.toString();
        }
    }

    @SuppressWarnings("SameParameterValue")
    private static ApplicationCommand createWrappedSlashCommand(String name, String cmdDesc, String optionDesc, String prefix, String suffix) {
        return makeCtcCommand(name, cmdDesc, Collections.singletonList(
                makeOption(ApplicationCommandType.STRING, "message", optionDesc, null, true, false, null, null, 192, null)
        ), new WrapTextCommand(prefix, suffix));
    }

    final static class AppendToEndCommand extends o<String> implements Function1<Map<String, ?>, String> {
        public String suffix;

        public AppendToEndCommand(String suffix) {
            super(1);
            this.suffix = suffix;
        }

        public final String invoke(Map<String, ?>  options) {
            m.checkNotNullParameter( options, "commandOptions");
            StringBuilder newMessage = new StringBuilder();
            Object originalMessage =  options.get("message");
            if (originalMessage == null) {
                originalMessage = "";
            }

            newMessage.append(originalMessage);
            newMessage.append(' ');
            newMessage.append(this.suffix);
            return newMessage.toString();
        }
    }

    @SuppressWarnings("SameParameterValue")
    private static ApplicationCommand createAppendToEndCommand(String name, String cmdDesc, String optionDesc, String suffix) {
        return makeCtcCommand(name, cmdDesc, Collections.singletonList(
                makeOption(ApplicationCommandType.STRING, "message", optionDesc, null, false, false, null, null, 192, null)
        ), new AppendToEndCommand(suffix));
    }

    final static class ReplaceMatchesCommand extends o<String> implements Function1<Map<String, ?>, String> {
        public final List<StrPair> replacements;
        public final Case c;

        public ReplaceMatchesCommand(List<StrPair> replacements, Case c) {
            super(1);
            this.replacements = replacements;
            this.c = c;
        }

        public final String invoke(Map<String, ?> options) {
            m.checkNotNullParameter(options, "commandOptions");
            StringBuilder newMessage = new StringBuilder();
            Object originalMessage = options.get("message");
            if (originalMessage == null) {
                originalMessage = "";
            }

            if (c == Case.UPPER) {
                originalMessage = ((String)originalMessage).toUpperCase();
            } else if (c == Case.LOWER) {
                originalMessage = ((String)originalMessage).toLowerCase();
            }

            for (StrPair replacement : replacements) {
                originalMessage = ((String)originalMessage).replace(replacement.a, replacement.b);
            }

            newMessage.append(originalMessage);
            return newMessage.toString();
        }
    }

    enum Case {
        UPPER,
        LOWER,
        ORIGINAL
    }

    private static ApplicationCommand createReplaceTextSlashCommand(String name, String cmdDesc, String optionDesc, List<StrPair> replaceList, Case c) {
        return makeCtcCommand(name, cmdDesc, Collections.singletonList(
                makeOption(ApplicationCommandType.STRING, "message", optionDesc, null, true, true, null, null, 192, null)
        ), new ReplaceMatchesCommand(replaceList, c));
    }

    private static ApplicationCommand createReplaceTextSlashCommand(String name, String cmdDesc, String optionDesc, List<StrPair> replaceList) {
        return createReplaceTextSlashCommand(name, cmdDesc, optionDesc, replaceList, Case.ORIGINAL);
    }

    final static class RawMessageCommand extends o<String> implements Function1<Map<String, ?>, String> {
        public final RawMsgHandler handler;

        public RawMessageCommand(RawMsgHandler handler) {
            super(1);
            this.handler = handler;
        }

        public final String invoke(Map<String, ?> options) {
            m.checkNotNullParameter(options, "commandOptions");
            StringBuilder newMessage = new StringBuilder();
            Object originalMessage = options.get("message");
            if (originalMessage == null) {
                originalMessage = "";
            }

            newMessage.append(handler.processRawMessage((String) originalMessage));
            return newMessage.toString();
        }
    }

    final static class EnableDisableCommand extends o<String> implements Function1<Map<String, ?>, String> {
        public final EnableDisableHandler handler;

        public EnableDisableCommand(EnableDisableHandler handler) {
            super(1);
            this.handler = handler;
        }

        public final String invoke(Map<String, ?> options) {
            m.checkNotNullParameter(options, "commandOptions");
            StringBuilder newMessage = new StringBuilder();

            boolean enabled = (boolean) options.get("enabled");

            newMessage.append(handler.processEnableDisable(enabled));
            return newMessage.toString();
        }
    }

    private static ApplicationCommand createHandleRawMessageCommand(String name, String cmdDesc, String optionDesc, RawMsgHandler handler) {
        boolean required = true;
        if (optionDesc == null) {
            required = false;
        }
        return makeCtcCommand(name, cmdDesc, Collections.singletonList(
                makeOption(ApplicationCommandType.STRING, "message", optionDesc, null, required, required, null, null, 192, null)
        ), new RawMessageCommand(handler));
    }

    private static ApplicationCommand createEnableDisableCommand(String name, String cmdDesc, EnableDisableHandler handler) {
        ArrayList<CommandChoice> truefalse = new ArrayList<>();
        truefalse.add(new CommandChoice("on", "true"));
        truefalse.add(new CommandChoice("off", "false"));

        return makeCtcCommand(name, cmdDesc, Collections.singletonList(
                makeOption(ApplicationCommandType.BOOLEAN, "enabled", "Enable/Disable", null, true, true, truefalse, null, 192, null)
        ), new EnableDisableCommand(handler));
    }


}
