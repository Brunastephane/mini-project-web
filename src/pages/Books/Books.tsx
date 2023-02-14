import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DisplayBook from "../../components/Book/DisplayBook";
import { booksQuery } from "../../components/Book/BooksQuery";

function Books() {
  /*
  const [booksQuery, setBooksQuery] = useState<string[]>();

  const getBooks = async () => {
    await fetch("http://localhost:4000/booksFromAPI")
      .then((response) => response.json())
      .then((res) => {
        setBooksQuery(res);
      });
  };

  useEffect(() => {
    if (!booksQuery) {
      getBooks();
    }
  }, [booksQuery]);
  */
  return (
    <Container>
      <Typography sx={{ paddingTop: "40px" }} variant="h4">
        Books
      </Typography>

      <Grid container spacing={2} sx={{ paddingTop: "40px" }}>
        {booksQuery &&
          booksQuery.map((book, index) => (
            <DisplayBook key={index} index={index} book={book} />
          ))}
      </Grid>
    </Container>
  );
}

export default Books;
