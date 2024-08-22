import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import DisplayLeaderboard from "./DisplayLeaderboard";

const mockStore = configureStore([]);

test("renders leaderboard with players", () => {
  const store = mockStore({
    game: {
      leaderboard: [
        { name: "Player1", points: 100 }, // Anpassung an "points"
        { name: "Player2", points: 90 }, // Anpassung an "points"
      ],
    },
  });

  render(
    <Provider store={store}>
      <DisplayLeaderboard />
    </Provider>
  );

  expect(screen.getByText(/Player1/i)).toBeInTheDocument();
  expect(screen.getByText(/Player2/i)).toBeInTheDocument();
});

test("renders message when no leaderboard entries are available", () => {
  const store = mockStore({
    game: {
      leaderboard: [],
    },
  });

  render(
    <Provider store={store}>
      <DisplayLeaderboard />
    </Provider>
  );

  expect(
    screen.getByText(/No leaderboard entries available/i)
  ).toBeInTheDocument();
});
