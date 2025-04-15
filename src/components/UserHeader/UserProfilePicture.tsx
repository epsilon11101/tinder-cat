import { Badge, Box, IconButton, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { pink } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { useGetVotesQuery } from "@/api/catImages/catImagesApi";

const UserProfilePicture = () => {
  const { push } = useRouter();
  const { data } = useGetVotesQuery();

  const totalVotes = data?.length ?? 0;

  const onRedirectHandler = () => {
    push("/likes");
  };

  return (
    <Stack width={200} height={200} position="relative">
      <Box
        component="img"
        src="/assets/catProfile.jpg"
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
        }}
      />
      <Box
        position="absolute"
        display="flex"
        bottom="0px"
        right="15px"
        bgcolor={pink[100]}
        sx={{
          borderRadius: "50%",
        }}
        alignItems="center"
        justifyContent="center"
        width="40px"
        height="40px"
      >
        <IconButton onClick={onRedirectHandler}>
          <Badge badgeContent={totalVotes} color="primary">
            <FavoriteIcon
              sx={{
                fontSize: 30,
                color: pink[400],
              }}
            />
          </Badge>
        </IconButton>
      </Box>
    </Stack>
  );
};

export default UserProfilePicture;
