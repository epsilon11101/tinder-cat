"use client";
import { useGetVotesQuery } from "@/api/catImages/catImagesApi";
import { getCatVotesResponse } from "@/api/catImages/catImagesTypes";
import LikeMichi from "@/components/LikeMichi/LikeMichi";

import { Container, Grid2 } from "@mui/material";
import React, { useEffect, useState } from "react";
import Masonry from "@mui/lab/Masonry";

const page = () => {
  const [items, setItems] = useState<getCatVotesResponse[]>([]);
  const { data } = useGetVotesQuery();

  useEffect(() => {
    if (data) {
      setItems((prevItems) => {
        const existingIds = new Set(prevItems.map((item) => item.id));
        const newItems = data.filter((item) => !existingIds.has(item.id));
        return [...prevItems, ...newItems];
      });
    }
  }, [data]);

  console.log(items);
  return (
    <Container
      maxWidth="lg"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 20,
        p: 2,
      })}
    >
      <Grid2
        container
        size="auto"
        display={"flex"}
        direction="column"
        rowGap={6}
      >
        {items.length > 0 && (
          <Masonry columns={4} spacing={2}>
            {items.map((item, index) => (
              <LikeMichi
                key={item.id ?? index}
                id={item.image_id}
                url={item.image.url}
              />
            ))}
          </Masonry>
        )}
      </Grid2>
    </Container>
  );
};

export default page;
