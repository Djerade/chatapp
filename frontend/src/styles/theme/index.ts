'use client'
import { createSystem, defaultConfig } from '@chakra-ui/react';
import { fonts } from './fonts';
// import { semanticTokens } from './semanticTokens';

const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts,
    },
  },
});

export default customTheme;
