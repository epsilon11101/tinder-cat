"use client";
import React, { FC, ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "@/theme/theme";
import "react-toastify/dist/ReactToastify.css";
import "@/theme/globals.css";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from "react-toastify";

interface ProvidersWrapperProps {
  children: ReactNode;
}

const ProvidersWrapper: FC<ProvidersWrapperProps> = ({ children }) => {
  return (
    <StoreProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            newestOnTop={true}
            rtl={false}
            pauseOnHover
            theme="colored"
          />
        </ThemeProvider>
      </AppRouterCacheProvider>
    </StoreProvider>
  );
};

export default ProvidersWrapper;
