import React from "react";
import type { Preview } from "@storybook/react";

import { withThemeByClassName } from '@storybook/addon-themes';

import { ThemeProvider } from '../components/theme-provider';
import { localPoppins } from '../app/fonts';

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import "../app/globals.css";
import { useTheme } from "next-themes";

export const globalTypes = {
  theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
          icon: 'circlehollow',
          items: ['light', 'dark'],
          showName: false
      }
  }
};

const withThemeProvider = (Story, context) => {
  const { setTheme } = useTheme();

  console.log('context.globals.theme: ', context.globals.theme)
  if (context.globals.theme) {
    setTheme(context.globals.theme);
  }

  return (
    <ThemeProvider
        attribute="class"
        defaultTheme={context.globals.theme}
        enableSystem
        disableTransitionOnChange
      >
        <Story {...context} />
    </ThemeProvider>
  );
};

const withFonts = (Story) => {
  return <div className={localPoppins.className}><Story /></div>;
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
          {
              name: 'light',
              value: 'hsl(var(--background))'
          },
          {
              name: 'dark',
              value: 'hsl(var(--background))'
          }
      ]
    }
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
    withThemeProvider,
    withFonts
  ],
};

export default preview;
