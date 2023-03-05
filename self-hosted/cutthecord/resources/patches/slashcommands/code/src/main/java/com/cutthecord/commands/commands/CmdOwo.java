package com.cutthecord.commands.commands;

import com.cutthecord.commands.RawMsgHandler;

public class CmdOwo implements RawMsgHandler {

    static final String[] expressions = {
            ">_<", ":3", "ʕʘ‿ʘʔ", ":D", "._.",
            ";3", "xD", "ㅇㅅㅇ", "(人◕ω◕)",
            ">_>", "ÙωÙ", "UwU", "OwO", ":P",
            "(◠‿◠✿)", "^_^", ";_;", "XDDD",
            "x3", "(• o •)", "<_<", "(・`ω´・)",
            ";;w;;", ">w<", "^w^"
    };

    public String processRawMessage(String msg) {
        return msg.replaceAll("[rl]", "w")
                .replaceAll("[RL]", "W")
                .replaceAll("n([aeiou])", "ny$1")
                .replaceAll("N([aeiou])", "Ny$1")
                .replaceAll("N([AEIOU])", "NY$1")
                .replace("ove", "uv")
                .replaceAll("!+", " "+ expressions[(int) Math.floor(Math.random()*expressions.length)]+ " ");
    }

}
