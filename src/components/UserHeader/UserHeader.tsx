"use client";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

const UserHeader = () => {
  const { push } = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleFavorites = () => {
    handleCloseNavMenu();
    push("/favorites");
  };
  const handleMain = () => {
    push("/");
  };

  return (
    <AppBar
      sx={{ height: 100, bgcolor: (theme) => theme.palette.background.paper }}
      position="fixed"
    >
      <Toolbar
        sx={{ height: "100%", justifyContent: "space-between", mx: "91px" }}
      >
        <Box
          component="img"
          src="/assets/CatLover.svg"
          onClick={handleMain}
          sx={{
            cursor: "pointer",
          }}
        />
        <Button
          variant="contained"
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
          onClick={handleFavorites}
        >
          FAVORITOS
        </Button>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={handleFavorites}>
              <Typography sx={{ textAlign: "center" }} variant="h6">
                FAVORITOS
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserHeader;
