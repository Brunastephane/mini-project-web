import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useNavigate } from "react-router-dom";

const DisplayBook = (book: any, index: number) => {
  const navigate = useNavigate();

  const [likeCount, setLikeCount] = useState<number>(0);

  return (
    <Grid item xs={6}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h5"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/book/${index}`);
              }}
            >
              {book.bookName}
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {book.bookAuthor}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Button
              onClick={() => {
                setLikeCount(likeCount - 1);
              }}
            >
              <HeartBrokenOutlinedIcon sx={{ color: "black", mr: "10px" }} />
            </Button>
            <Button
              onClick={() => {
                setLikeCount(likeCount + 1);
              }}
            >
              <FavoriteBorderOutlinedIcon sx={{ color: "black" }} />
            </Button>
            {likeCount}
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={book.bookImage}
          alt="Live from space album cover"
          onClick={() => {
            navigate(`/book/${index}`);
          }}
        />
      </Card>
    </Grid>
  );
};

export default DisplayBook;
