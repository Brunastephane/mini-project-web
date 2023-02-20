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

const DisplayBook = (props: any) => {
  const { book } = props;
  const navigate = useNavigate();

  const [likeCount, setLikeCount] = useState<number>(book.bookLikes);

  const submitLikeChanges = async(bookId: any, like:number)=>{
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/changeLikes`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: parseFloat(bookId),
          bookLikes: likeCount + like,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          setLikeCount(res.bookLikes);
        });
        
    } catch (error) {
      console.log(error);
    }

  }

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
                navigate(`/mini-project-web/book/${book.id}`);
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
                //setLikeCount(likeCount - 1);
                submitLikeChanges(book.id , -1);
              }}
            >
              <HeartBrokenOutlinedIcon sx={{ color: "black", mr: "10px" }} />
            </Button>
            <Button
              onClick={() => {
                submitLikeChanges(book.id, 1);
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
            navigate(`/mini-project-web/book/${book.id}`);
          }}
        />
      </Card>
    </Grid>
  );
};

export default DisplayBook;
