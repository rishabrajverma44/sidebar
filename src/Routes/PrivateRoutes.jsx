import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const PrivateRoute = ({ children }) => {
  const home_url = process.env.REACT_APP_BASE_URL_DEVLOPMENT;

  const [isPrivate, setPrivate] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "123") {
      setPrivate(true);
    } else {
      setError("Incorrect password");
    }
  };

  if (isPrivate) {
    return children;
  }

  return (
    <>
      <Link to={home_url} class="inline-flex text-black bg-primary-600">
        Back to Homepage
      </Link>

      <Container
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: 400,
            p: 3,
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Enter Password {"123"}
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default PrivateRoute;
