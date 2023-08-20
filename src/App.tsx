import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import Button from "@mui/joy/Button";
import InputField from "./components/InputField";
import TextareaField from "./components/TextareaField";
import Typography from "@mui/joy/Typography";
import { FindELS } from "./FindELS";
import { Container, Grid } from "@mui/joy";
import { Box } from "@mui/material";

function App() {
  const [hebrewPassage, setHebrewPassage] = useState<string>("");
  const [skipIntervals, setSkipIntervals] = useState<number>(1);
  const [hebrewWord, setHebrewWord] = useState<string[]>([]);
  const [startWord, setStartWord] = useState<string>(""); // New state for starting Hebrew word
  const [result, setResult] = useState<string>("");

  const handleHebrewPassageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setHebrewPassage(e.target.value);
  };

  const handleSkipIntervalsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSkipIntervals(parseInt(e.target.value));
  };

  const handleStartWordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartWord(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elsResult = FindELS(hebrewPassage, skipIntervals, startWord);
    setResult(elsResult);
  };

  return (
    <div className="App">
      <Container
        maxWidth="xl"
        sx={{
          margin: "auto",
        }}
      >
        <Typography
          level="h1"
          sx={{
            marginBottom: 2,
          }}
        >
          Hebrew ELS Search
        </Typography>

        <Grid container spacing={8}>
          <Grid xs={6}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={8}>
                <Grid xs={12}>
                  <InputField
                    label="Starting Word"
                    placeholder="Starting Word"
                    helperText="The word you want to start the search from"
                    value={startWord}
                    onChange={handleStartWordChange}
                  />
                </Grid>
                <Grid xs={12}>
                  <InputField
                    label="Skip Intervals"
                    placeholder="Skip Intervals"
                    helperText="The number of letters to skip between each letter in the sequence"
                    value={skipIntervals}
                    onChange={handleSkipIntervalsChange}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextareaField
                    label="Hebrew Passage"
                    placeholder="Hebrew Passage"
                    helperText="The hebrew passage you want to search in"
                    value={hebrewPassage}
                    onChange={handleHebrewPassageChange}
                    minRows={10}
                  />
                </Grid>
                <Grid xs={12}>
                  <Button type="submit">Submit</Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid xs={6}>
            <Typography
              level="h3"
              sx={{
                marginTop: 2,
              }}
            >
              Result
            </Typography>
            <Typography>{result}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
