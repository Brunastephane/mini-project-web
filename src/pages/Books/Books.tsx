import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DisplayBook from "../../components/Book/DisplayBook";
import { booksQuery } from "../../components/Book/BooksQuery";

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
