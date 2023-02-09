import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

function Book() {
  const [book, setBook] = useState(booksQuery[1]);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.bookName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Book;
