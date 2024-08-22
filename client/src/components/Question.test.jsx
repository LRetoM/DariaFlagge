import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Question from "./Question";

const mockStore = configureStore([]);

describe("Question Component", () => {
  test('displays "Guess the" when questionType is "country"', () => {
    const store = mockStore({
      game: {
        questionType: "country",
      },
    });

    render(
      <Provider store={store}>
        <Question />
      </Provider>
    );

    const questionText = screen.getByText(/Guess the country:/i);
    expect(questionText).toBeInTheDocument();
  });

  test('displays "Guess the capital" when questionType is "capital"', () => {
    const store = mockStore({
      game: {
        questionType: "capital",
      },
    });

    render(
      <Provider store={store}>
        <Question />
      </Provider>
    );

    const questionText = screen.getByText(/Guess the capital?/i);
    expect(questionText).toBeInTheDocument();
  });
});
