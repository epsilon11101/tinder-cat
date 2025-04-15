import { IconButton, Menu } from "@mui/material";
import {
  bindMenu,
  bindTrigger,
  usePopupState,
  PopupState,
} from "material-ui-popup-state/hooks";
import React, { FC, ReactNode } from "react";

interface TMenuProps {
  button?: ReactNode;
  icon?: ReactNode;
  children: (popupState: PopupState) => ReactNode;
}

const TMenu: FC<TMenuProps> = ({ icon, children }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "popup-menu",
  });

  return (
    <>
      {icon && <IconButton {...bindTrigger(popupState)}>{icon}</IconButton>}
      <Menu
        {...bindMenu(popupState)}
        sx={{
          "& .MuiMenu-paper": {
            backgroundColor: (theme) => theme.palette.primary.main,
            borderRadius: "8px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {children(popupState)}
      </Menu>
    </>
  );
};

export default TMenu;
