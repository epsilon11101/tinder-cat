import { Box, Stack, StackProps } from "@mui/material";
import React, { FC } from "react";

interface LikeMichiProps extends StackProps {
  id: string;
  url: string;
}

const LikeMichi: FC<LikeMichiProps> = ({ id, url }) => {
  return (
    <Stack>
      <Box
        component="img"
        srcSet={`${url}?w=162&auto=format&dpr=2 2x`}
        src={`${url}?w=162&auto=format`}
        alt={id}
        loading="lazy"
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: "block",
          width: "100%",
        }}
      />
    </Stack>
  );
};

export default LikeMichi;
