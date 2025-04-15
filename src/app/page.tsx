"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetCatImagesQuery } from "@/api/catImages/catImagesApi";
import TDialog from "@/components/common/TDialog";
import MichiCard from "@/components/MichiCard/MichiCard";

import { Container, Grid2, Typography } from "@mui/material";
import {
  getCatImagesResponnse,
  michiDataType,
} from "@/api/catImages/catImagesTypes";
import MichiDialog from "@/components/MichiCard/MichiDialog";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<getCatImagesResponnse>([]);
  const [michiInfo, setMichiInfo] = useState<
    (getCatImagesResponnse[number] & michiDataType) | null
  >(null);
  const limit = 16;

  const { data } = useGetCatImagesQuery({
    limit,
    page,
    order: "ASC",
    has_breeds: true,
  });

  useEffect(() => {
    if (data) {
      setItems((prevItems) => [...prevItems, ...data]);
    }
  }, [data]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={() => ({
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
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={data ? data.length === limit : true}
            loader={
              <Typography variant="h6" textAlign="center">
                Cargando más michis...
              </Typography>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>¡Has visto todos los michis disponibles!</b>
              </p>
            }
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            {items.map((item, idx) => (
              <MichiCard
                key={item.id + idx}
                michiData={item}
                setMichiInfo={setMichiInfo}
                setOpen={setOpen}
              />
            ))}
          </InfiniteScroll>
        </Grid2>
      </Container>

      <TDialog
        open={open}
        setOpen={setOpen}
        withIcon
        tDialogSlotProps={{
          dialogContentProps: {
            sx: {
              pl: 2,
              pr: 2,
            },
          },
        }}
      >
        {michiInfo && <MichiDialog michiData={michiInfo} />}
      </TDialog>
    </>
  );
};

export default Page;
