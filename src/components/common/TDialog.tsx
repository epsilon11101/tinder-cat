import {
  Dialog,
  DialogActions,
  DialogActionsProps,
  DialogContent,
  DialogContentProps,
  DialogProps,
  DialogTitle,
  DialogTitleProps,
  IconButton,
  IconButtonProps,
} from "@mui/material";
import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";

type slotPropsType = {
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  dialogActionProps?: DialogActionsProps;
  iconProps?: IconButtonProps;
};

interface TDialogProps extends DialogProps {
  title?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  actions?: ReactNode;
  withIcon?: boolean;
  icon?: ReactNode;
  tDialogSlotProps?: slotPropsType;
  onCloseActions?: () => void;
}

const TDialog: FC<TDialogProps> = ({
  title,
  actions,
  open,
  setOpen,
  children,
  icon,
  tDialogSlotProps,
  onCloseActions,
  withIcon = false,
  ...rest
}) => {
  console.log("open====>", open);
  const { dialogTitleProps, dialogContentProps, dialogActionProps, iconProps } =
    tDialogSlotProps || {};

  const handleClose = () => {
    if (onCloseActions) {
      onCloseActions();
    }
    setOpen(false);
  };

  return (
    <Dialog
      {...rest}
      open={open}
      sx={{ p: 3 }}
      disableEnforceFocus
      onClose={handleClose}
    >
      {title && (
        <DialogTitle variant="h4" sx={{ pt: 3 }} {...dialogTitleProps}>
          {title}
        </DialogTitle>
      )}
      {withIcon && (
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.primary.main,
          })}
          {...iconProps}
        >
          {icon || <CloseIcon />}
        </IconButton>
      )}
      <DialogContent {...dialogContentProps}>{children}</DialogContent>
      {actions && (
        <DialogActions sx={{ p: 3, width: "100%" }} {...dialogActionProps}>
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default TDialog;
