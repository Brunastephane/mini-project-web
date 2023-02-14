import {
  Alert,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    console.log(name, email, message);
  };

  return (
    <Container>
      <Typography variant="h5" sx={{ mt: "50px" }}>
        Contact Us
      </Typography>
      <Paper sx={{ p: "15px", mt: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              sx={{ width: "100%" }}
              label="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              sx={{ width: "100%" }}
              label="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              sx={{ width: "100%" }}
              multiline
              rows={10}
              label="Message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
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
        </Grid>
      </Paper>
    </Container>
  );
}

export default Contact;
