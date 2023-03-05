package com.cutthecord.commands.commands;

import com.cutthecord.commands.RawMsgHandler;

public class CmdEmojify implements RawMsgHandler {

    @Override
    public String processRawMessage(String msg) {

        StringBuilder s = new StringBuilder();
        for (char c : msg.toCharArray()) {
            s.append(emojifyChar(c));
        }

        return s.toString();
    }

    final String[] numbers = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};

    public String emojifyChar(char c) {
        if (Character.isDigit(c)) {
            int i = Integer.parseInt(Character.toString(c));
            return ":" + numbers[i] + ":";
        }

        if (Character.isAlphabetic(c)) {

            if (c == 'b') {
                return ":b:";
            }

            return ":regional_indicator_" + String.valueOf(c).toLowerCase() + ":";
        }

        switch (c) {
            case '.': return ":record_button";
            case '?': return ":grey_question:";
            case '!': return ":grey_exclamation:";
        }

        return Character.toString(c);
    }

}
