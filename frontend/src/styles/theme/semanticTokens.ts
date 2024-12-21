import { defineSemanticTokens } from "@chakra-ui/react";
export const semanticTokens = defineSemanticTokens({
    colors: {
        info: {
            solid: { value: "colors.blue.500" },
            contrast: { value: "white" },
            fg: { value: "colors.blue" },
            muted: { value: "colors.blue.600" },
            subtle: { value: "colors.blue.700" },
            emphasis: { value: "colors.blue.100" },
            focusRing: { value: "colors.green" },
        },
        success: {
            solid: { value: "colors.green.500" },
            contrast: { value: "colors.green.100" },
            fg: { value: "colors.space_cadet.500" },
            muted: { value: "colors.blue.200" },
            subtle: { value: "colors.green.600" },
            emphasis: { value: "colors.orange.600" },
            focusRing: { value: "colors.green.500" },
        },
        warning: {
            solid: { value: "colors.orange.500" },
            contrast: { value: "colors.orange.100" },
            fg: { value: "colors.orange.500" },
            muted: { value: "colors.orange.600" },
            subtle: { value: "colors.orange.700" },
            emphasis: { value: "colors.orange.400" },
            focusRing: { value: "colors.orange.500" },
        },
        error: {
            solid: { value: "colors.red.500" },
            contrast: { value: "colors.red.100" },
            fg: { value: "colors.red.500" },
            muted: { value: "colors.red.600" },
            subtle: { value: "colors.red.700" },
            emphasis: { value: "black" },
            focusRing: { value: "colors.red.500" },
        },
    },
});