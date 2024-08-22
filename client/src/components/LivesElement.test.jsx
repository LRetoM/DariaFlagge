import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LivesElement from "./LivesElement";

const mockStore = configureStore([]);

describe("LivesElement Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      game: {
        lifes: 3,
      },
    });
  });

  test("displays the correct number of lives from the Redux store", () => {
    render(
      <Provider store={store}>
        <LivesElement />
      </Provider>
    );

    // Suche nach "Leben: 3"
    const livesText = screen.getByText(/Leben:\s*3/i);
    expect(livesText).toBeInTheDocument();
  });

  test("updates the number of lives when the Redux store changes", () => {
    store = mockStore({
      game: {
        lifes: 5,
      },
    });

    render(
      <Provider store={store}>
        <LivesElement />
      </Provider>
    );

    // Suche nach "Leben: 5"
    const livesText = screen.getByText(/Leben:\s*5/i);
    expect(livesText).toBeInTheDocument();
  });
});
