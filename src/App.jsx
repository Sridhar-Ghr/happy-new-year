import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  Box
} from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Confetti from "react-confetti";

function App() {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1d2671, #c33764)",
        color: "white"
      }}
    >
      <Confetti />

      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <CelebrationIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Happy New Year</Typography>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh"
        }}
      >
        <Card sx={{ maxWidth: 500, textAlign: "center", p: 3 }}>
          <CardContent>
            <Typography variant="h3" gutterBottom>
              🎆 Happy New Year {year}! 🎆
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Wishing you happiness, success, and new adventures in the year ahead.
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<CelebrationIcon />}
            >
              Celebrate
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;
