import React from "react";
import ThemeProvider from "../src/theme/ThemeProvider";
import "./global.scss"
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';


export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}