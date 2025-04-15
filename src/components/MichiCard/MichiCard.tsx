"use client";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CardProps,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Dispatch, FC, SetStateAction, useMemo } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  getCatImagesResponnse,
  michiDataType,
} from "@/api/catImages/catImagesTypes";
import MenuItem from "@mui/material/MenuItem";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

import { shareMichi } from "@/adapters/shareMichi";
import TMenu from "../common/TMenu";
import { michiNames } from "@/api/dummyData";
import { getName } from "@/adapters/getName";
import { getAge, getGender } from "@/adapters/randomData";
import { usePostVoteMutation } from "@/api/catImages/catImagesApi";

interface MichiCardProps extends CardProps {
  michiData: getCatImagesResponnse[number];
  setMichiInfo: React.Dispatch<
    React.SetStateAction<(getCatImagesResponnse[number] & michiDataType) | null>
  >;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MichiCard: FC<MichiCardProps> = ({
  michiData,
  setMichiInfo,
  setOpen,
  ...rest
}) => {
  const fakeMichiName = useMemo(() => getName(michiNames), []);
  const fakeMichiAge = useMemo(() => getAge(), []);
  const fakeMichiGender = useMemo(() => getGender(), []);
  const bread = michiData.breeds[0];
  const [postLike] = usePostVoteMutation();

  const onMenuClickHandler = (
    socialNetwork: "whatsapp" | "facebook",
    close: (eventOrAnchorEl?: React.SyntheticEvent | Element | null) => void
  ) => {
    close();
    shareMichi(socialNetwork, michiData.url, `Mira este michi: ${bread.name}`);
  };

  const onClickHandler = () => {
    setMichiInfo({
      ...michiData,
      michiName: fakeMichiName,
      age: fakeMichiAge,
      gender: fakeMichiGender,
    });
    setOpen(true);
  };

  const onFavoriteClickHandler = () => {
    postLike({
      image_id: michiData.id,
      value: 1,
    })
      .unwrap()
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Card
      elevation={2}
      sx={{
        maxWidth: 250,
        bgcolor: (theme) => theme.palette.secondary.main,
        borderRadius: 5,
      }}
      {...rest}
    >
      <CardActionArea onClick={onClickHandler}>
        <Stack width="100%" justifyContent="center" alignItems={"center"}>
          <CardMedia
            component="img"
            src={michiData.url}
            height={150}
            sx={{
              my: 2,
              objectFit: "cover",
              maxWidth: "143px",
              maxHeight: "143px",
              borderRadius: "50%",
            }}
          />
        </Stack>
        <CardContent>
          <Stack direction="column" rowGap={2}>
            <Typography
              variant="h3"
              fontWeight="bold"
              textAlign="center"
              color="primary.main"
            >
              {fakeMichiName}
            </Typography>
            <Typography noWrap variant="body2">
              {bread.description}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Tooltip title="Like">
          <IconButton
            aria-label="add to favorites"
            color="primary"
            onClick={onFavoriteClickHandler}
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>

        <TMenu icon={<ShareIcon sx={{ color: "common.black" }} />}>
          {(popupState) => (
            <div>
              <MenuItem
                onClick={() => onMenuClickHandler("whatsapp", popupState.close)}
              >
                <ListItemIcon>
                  <WhatsAppIcon sx={{ color: "common.white" }} />
                </ListItemIcon>
                <ListItemText
                  primary="WhatsApp"
                  slotProps={{
                    primary: {
                      variant: "body2",
                      color: "common.white",
                    },
                  }}
                />
              </MenuItem>
              <MenuItem
                onClick={() => onMenuClickHandler("facebook", popupState.close)}
              >
                <ListItemIcon>
                  <FacebookIcon sx={{ color: "common.white" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Facebook"
                  slotProps={{
                    primary: {
                      variant: "body2",
                      color: "common.white",
                    },
                  }}
                />
              </MenuItem>
            </div>
          )}
        </TMenu>
      </CardActions>
    </Card>
  );
};

export default MichiCard;
