"use client";
import { Button, ButtonProps, styled } from "@mui/material";
import React from "react";

export const TButton = styled(({ sx, ...rest }: ButtonProps) => (
  <Button
    variant="contained"
    {...rest}
    sx={{
      px: 1,
      py: 1,
      ...sx,
    }}
  />
))(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 18,
  borderRadius: 15,
  fontWeight: 500,
  width: "100%",
  maxHeight: "56px",
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
  },
}));
