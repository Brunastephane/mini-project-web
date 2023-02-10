import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DisplayBook from "../../components/Book/DisplayBook";

const booksQuery = [
  {
    bookName:
      "The Vanishing of Margaret Small: An uplifting and page-turning mystery",
    bookImage: "https://m.media-amazon.com/images/I/41y+BnHcQ1L._SY346_.jpg",
    bookAuthor: "Neil Alexander",
    bookPrice: "£13.49",
    bookLikes: 701,
  },
  {
    bookName:
      "How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships",
    bookImage: "https://m.media-amazon.com/images/I/41aI+vWAy6L._SY346_.jpg",
    bookAuthor: "Leil Lowndes",
    bookPrice: "£14.99",
    bookLikes: 8980,
  },
  {
    bookName:
      "Just Say Yes: The BRAND NEW uplifting romantic comedy from Maxine Morrey",
    bookImage: "https://m.media-amazon.com/images/I/51li226M5ML.jpg",
    bookAuthor: "Maxine Morrey",
    bookPrice: "£22.99",
    bookLikes: 594,
  },
  {
    bookName:
      "The Little Blue Door: A perfect Greek island escapist summer read. A passionate love story – a heart-wrenching discovery. (Little Blue Door Series Book 1)",
    bookImage: "https://m.media-amazon.com/images/I/51jQPcRygUL._SY346_.jpg",
    bookAuthor: "Francesca Catlow",
    bookPrice: "£18.19",
    bookLikes: 687,
  },
];

function Books() {
  return (
    <Container>
      <Typography sx={{ paddingTop: "40px" }} variant="h4">
        Books
      </Typography>

      <Grid container spacing={2} sx={{ paddingTop: "40px" }}>
        {booksQuery.map((book, index) => DisplayBook(book, index))}
      </Grid>
    </Container>
  );
}

export default Books;
