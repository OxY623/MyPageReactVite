import * as Tooltip from "@radix-ui/react-tooltip";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeProvider";
import "./i18n/config";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <App />
      <Tooltip.Provider>
        <Tooltip.Root>
          {/* <Tooltip.Trigger>Наведите на меня</Tooltip.Trigger>
          <Tooltip.Content>Содержимое подсказки</Tooltip.Content> */}
        </Tooltip.Root>
      </Tooltip.Provider>
    </ThemeProvider>
  </StrictMode>
);
