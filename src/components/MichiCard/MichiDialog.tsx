"use client";
import {
  Box,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import TransgenderIcon from "@mui/icons-material/Transgender";
import PetsIcon from "@mui/icons-material/Pets";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import { TButton } from "../common/TButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  getCatImagesResponnse,
  michiDataType,
} from "@/api/catImages/catImagesTypes";
import { shareMichi } from "@/adapters/shareMichi";
import { usePostVoteMutation } from "@/api/catImages/catImagesApi";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { theme } from "@/theme/theme";

interface MichiDialogProps {
  michiData: getCatImagesResponnse[number] & michiDataType;
}

const MichiDialog: FC<MichiDialogProps> = ({ michiData }) => {
  const breeds = michiData.breeds[0];
  const [postLike, { data }] = usePostVoteMutation();

  const onMenuClickHandler = (socialNetwork: "whatsapp" | "facebook") => {
    shareMichi(socialNetwork, michiData.url, `Mira este michi: ${breeds.name}`);
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
    <Grid2
      container
      direction={{
        xs: "column",
        md: "row",
      }}
      my={2}
      columnGap={3}
    >
      <Grid2
        container
        direction="column"
        size="grow"
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Grid2 size="grow">
          <Box
            component="img"
            src={michiData.url}
            sx={{
              objectFit: "cover",
              width: "205px",
              height: "205px",
              borderRadius: "50%",
            }}
          />
        </Grid2>

        <Grid2
          rowGap={2}
          width="100%"
          sx={(theme) => ({
            [theme.breakpoints.up("xs")]: {
              display: "none",
            },
            [theme.breakpoints.up("md")]: {
              display: "flex",
            },
          })}
        >
          <Stack width="100%" direction="column" rowGap={2}>
            <TButton
              color="primary"
              variant="contained"
              startIcon={<FavoriteIcon />}
              sx={{ fontSize: 10, justifyContent: "flex-start", pl: 2 }}
              onClick={onFavoriteClickHandler}
            >
              Guardar en Favoritos
            </TButton>

            <TButton
              variant="contained"
              color="info"
              startIcon={<WhatsAppIcon />}
              sx={{
                fontSize: 10,
                bgcolor: "common.black",
                justifyContent: "flex-start",
                pl: 2,
              }}
              onClick={() => onMenuClickHandler("whatsapp")}
            >
              Compartir en whatsapp
            </TButton>
            <TButton
              variant="contained"
              color="info"
              startIcon={<FacebookIcon />}
              sx={{
                fontSize: 10,
                bgcolor: "common.black",
                justifyContent: "flex-start",
                pl: 2,
              }}
              onClick={() => onMenuClickHandler("facebook")}
            >
              Compartir en facebook
            </TButton>
          </Stack>
        </Grid2>
      </Grid2>
      <Grid2 container size="grow" direction="column" rowGap={2}>
        <Stack direction="column" rowGap={2} justifyContent="space-between">
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            color="primary"
          >
            {michiData.michiName}
          </Typography>
          <Typography variant="body2">{breeds.description}</Typography>
          <List disablePadding sx={{ "& .MuiListItem-root": { pl: 0 } }}>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon color="primary" />
              </ListItemIcon>
              <ListItemText>{breeds.origin}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PetsIcon color="primary" />
              </ListItemIcon>
              <ListItemText>{breeds.name}</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <CakeIcon color="primary" />
              </ListItemIcon>
              <ListItemText>{michiData.age}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TransgenderIcon color="primary" />
              </ListItemIcon>
              <ListItemText>{michiData.gender} </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ChildFriendlyIcon color="primary" />
              </ListItemIcon>
              <ListItemText>{breeds.temperament} </ListItemText>
            </ListItem>
          </List>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default MichiDialog;
