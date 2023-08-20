import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("ELS React App", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

  test("displays no results when there is no ELS match", async () => {
    render(<App />);
    const inputPassage = "אבגדהוזחט";
    const inputWord = "אז";

    const passageInput = screen.getByPlaceholderText("Enter Hebrew passage");
    fireEvent.change(passageInput, { target: { value: inputPassage } });

    const intervalInput = screen.getByPlaceholderText("Interval");
    fireEvent.change(intervalInput, { target: { value: "3" } });

    const wordInput = screen.getByPlaceholderText("Word to match");
    fireEvent.change(wordInput, { target: { value: inputWord } });

    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);

    const noResults = await screen.findByText(
      "No ELS match found for the provided word."
    );
    expect(noResults).toBeInTheDocument();
  });

  test("displays and highlights letters for a successful ELS match", () => {
    render(<App />);

    const inputPassage: string = "אבגדהוזחט";
    const inputWord: string = "אד";

    const passageInput: HTMLElement = screen.getByPlaceholderText(
      "Enter Hebrew passage"
    );
    fireEvent.change(passageInput, { target: { value: inputPassage } });

    const intervalInput: HTMLElement = screen.getByPlaceholderText("Interval");
    fireEvent.change(intervalInput, { target: { value: "3" } });

    const wordInput: HTMLElement = screen.getByPlaceholderText("Word to match");
    fireEvent.change(wordInput, { target: { value: inputWord } });

    const searchButton: HTMLElement = screen.getByRole("button", {
      name: "Search",
    });
    fireEvent.click(searchButton);

    // Check if the passage contains the highlighted word
    const highlightedLetters: NodeListOf<HTMLElement> = screen
      .getByText(inputPassage)
      .querySelectorAll('span[style="background-color: yellow;"]');
    const highlightedWord: string = Array.from(highlightedLetters)
      .map((span) => span.textContent)
      .join("");

    expect(highlightedWord).toBe(inputWord);
  });
});
