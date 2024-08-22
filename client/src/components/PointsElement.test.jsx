import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import PointsElement from "./PointsElement";

const mockStore = configureStore([]);

describe("PointsElement Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      game: {
        points: 10,
      },
    });
  });

  test("displays the correct number of points from the Redux store", () => {
    render(
      <Provider store={store}>
        <PointsElement />
      </Provider>
    );

    // Hier wird flexibler nach "Punkte: 10" gesucht
    const pointsText = screen.getByText(/Punkte:\s*10/i);
    expect(pointsText).toBeInTheDocument();
  });

  test("updates the number of points when the Redux store changes", () => {
    store = mockStore({
      game: {
        points: 20,
      },
    });

    render(
      <Provider store={store}>
        <PointsElement />
      </Provider>
    );

    // Suche nach "Punkte: 20"
    const pointsText = screen.getByText(/Punkte:\s*20/i);
    expect(pointsText).toBeInTheDocument();
  });
});
