import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Container,
  Grid,
  Paper,
  Rating,
  Stack,
  TextField,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import { booksQuery } from "../../components/Book/BooksQuery";

function Book() {
  const [book, setBook] = useState<any>([]);
  const [love, setLove] = useState<boolean>(false);
  const [comments, setComments] = useState<any | null>([]);
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<number | null>(null);
  const [overallRating, setOverallRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const { id } = useParams();

  useLayoutEffect(() => {
    if (id && loading) {
      // verifica se tem Id e se a pagina esta em carregamento se sim altera o state book e altera o state loading para false
      setLoading(false);
      setBook(booksQuery[parseInt(id)]);
    }
  }, [id, loading]); // Passar condicoes que sao utilizadas no if no final do UseLayoutEffect ou UseEffect

  useEffect(() => {
    if (comments) {
      let sum = 0;
      comments.map((comment: any) => (sum = sum + comment.rating));
      setOverallRating(sum / comments.length);
    }
  }, [comments]);

  const handleLove = () => {
    if (!love) {
      setLove(true);
    } else {
      setLove(false);
    }
  };

  const handleSubmit = () => {
    if (name !== "" && rating !== null && review !== "") {
      let data = { name: name, rating: rating, review: review };
      setComments([...comments, data]);
      setName("");
      setRating(null);
      setReview("");
      setMessage("");
    } else {
      setMessage("Complete all fields to submit your comment.");
    }
  };

  return (
    <Container>
      <Typography sx={{ paddingTop: "40px" }} variant="h4">
        {book.bookName}
      </Typography>
      <Typography>Author: {book.bookAuthor}</Typography>

      <Grid container spacing={2} sx={{ paddingTop: "40px" }}>
        <Grid item xs={3}>
          <img
            alt={book.bookName}
            src={book.bookImage}
            style={{ width: "100%" }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", bgcolor: "primary.dark" }}
            href={book.bookLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Want to read
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", mt: "10px" }}
            startIcon={love ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            onClick={() => {
              handleLove();
            }}
          >
            Love this book
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Paper sx={{ p: "15px" }}>
            <Typography>
              <b>Overall Rating</b>
            </Typography>
            <Stack>
              <Rating
                precision={0.1}
                name="size-medium"
                value={overallRating}
                max={10}
                readOnly
              />
            </Stack>
            <Typography sx={{ mt: "15px" }}>
              <b>Description:</b> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In tellus turpis, mattis aliquet ante id,
              eleifend pulvinar nulla. Fusce finibus quam id quam commodo
              finibus. Aenean efficitur euismod fringilla. Mauris convallis
              finibus augue et efficitur. Morbi semper orci massa, vulputate
              lacinia ante bibendum sed. Donec gravida eros et tortor pretium
              suscipit. Quisque ultricies nulla vel porta consequat. Phasellus
              vulputate ipsum arcu, quis varius massa eleifend quis.
            </Typography>
          </Paper>
          <Typography variant="h6" sx={{ mt: "50px" }}>
            Comments
          </Typography>
          <Paper sx={{ p: "15px", mt: "10px" }}>
            {message !== "" && <Alert severity="error">{message}</Alert>}
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Stack sx={{ mt: "15px" }}>
                  <Rating
                    precision={0.1}
                    name="size-medium"
                    max={10}
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  sx={{ width: "100%", mt: "10px" }}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  sx={{ width: "100%" }}
                  rows={5}
                  label="Review"
                  value={review}
                  onChange={(event) => {
                    setReview(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
          {comments.map((comment: any) => (
            <Paper sx={{ p: "15px", mt: "10px" }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Typography>Name:{comment.name}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Stack sx={{ mt: "15px" }}>
                    <Rating
                      precision={0.1}
                      name="size-medium"
                      max={10}
                      value={comment.rating}
                    />
                  </Stack>
                </Grid>

                <Grid item xs={12}>
                  <Typography>Review:{comment.review}</Typography>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Book;
