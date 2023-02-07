import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const DisplayBook = (book: any) => {
  return (
    <Grid item xs={6}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
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
            <ThumbDownOffAltIcon sx={{ color: "black", mr: "10px" }} />
            <ThumbUpOffAltIcon sx={{ color: "black" }} />
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={book.bookImage}
          alt="Live from space album cover"
        />
      </Card>
    </Grid>
  );
};

export default DisplayBook;
