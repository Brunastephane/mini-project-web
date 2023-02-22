import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  LinearProgress,
  Modal,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useLayoutEffect, useState } from "react";

const sleep = async (milliseconds: number) => {
  await new Promise((resolve) => {
    return setTimeout(resolve, milliseconds);
  });
};


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [contactMessages, setContactMessages] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useLayoutEffect(() => {
    if (loading) {
      getContacts();
    }
  }, [loading]);

  const handleSubmit = () => {
    if (!name || !email || !message) {
      setError("Complete all fields to submit!!!");
    } else {
      addContact();
    }
  };
  const getContacts = async () => {
    setLoading(true);
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/getContacts`, {
        method: "get",
      })
        .then((response) => response.json())
        .then(async (res) => {
          await sleep(1000);
          setContactMessages(res);
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const addContact = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/addContact`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactName: name,
          contactEmail: email,
          contactMessage: message,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          setError("");
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Your message has been posted.");
          setOpen(true);
        });
    } catch (error) {
      console.log(error);
    }
    getContacts();
  };

  return (
    <Container>
      <Typography variant="h5" sx={{ mt: "50px" }}>
        Contact Us
      </Typography>
      <Paper sx={{ p: "15px", mt: "10px" }}>
        {error !== "" && <Alert severity="error" sx={{mb:2}}>{error}</Alert>}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              sx={{ width: "100%" }}
              value={name}
              label="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              sx={{ width: "100%" }}
              value={email}
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
              value={message}
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
            {success !== "" && (
              <Modal
              open={open}
              onClose={handleClose}
            ><Box 
            sx={style}>
            <Typography variant="h6" component="h2">
              Success!
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {success}
            </Typography>
          </Box>
        </Modal>
            )}
          </Grid>
        </Grid>
        {loading && <LinearProgress sx={{ mt: "30px" }} />}
      </Paper>
      {contactMessages &&
        contactMessages.map((contactMessage: any) => (
          <Paper sx={{ p: "15px", mt: "10px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField  label="Name" variant="standard" value={contactMessage.name} 
              sx={{ width: "100%" }}InputProps={{
            readOnly: true,
          }}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Email" variant="standard" value={contactMessage.email} 
              sx={{ width: "100%" }}InputProps={{
            readOnly: true,
          }}/>
              </Grid>             

              <Grid item xs={12} md={12}>
                <TextField rows={3} multiline  label="Message" variant="standard" value={contactMessage.message} 
              sx={{ width: "100%" }}InputProps={{
            readOnly: true,
          }}/>
                
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography>Date: {contactMessage.created_at}</Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
    </Container>
  );
}

export default Contact;
