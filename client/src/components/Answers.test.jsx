import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Answers from "./Answers";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mockStore = configureStore([]);

describe("Answers Component", () => {
  let store;
  let mockAxios;

  beforeEach(() => {
    store = mockStore({
      game: {
        countries: [
          { country: "Germany", capital: "Berlin" },
          { country: "France", capital: "Paris" },
        ],
        leaderboard: [],
        name: "player 1",
        lifes: 3,
        counter: 0,
        points: 0,
        questionType: "country",
      },
    });

    store.dispatch = jest.fn();

    // Axios mocken
    mockAxios = new MockAdapter(axios);
    mockAxios
      .onPost("http://localhost:3001/getAndUpdateLeaderboard")
      .reply(200, {
        leaderboard: [],
      });
  });

  afterEach(() => {
    // Mocking nach jedem Test zurücksetzen
    mockAxios.reset();
  });

  test("renders answer buttons", () => {
    const currentCountry = {
      opps: [0, 1],
    };

    render(
      <Provider store={store}>
        <Router>
          <Answers
            currentCountry={currentCountry}
            setCurrentCountry={() => {}}
            setKey={() => {}}
          />
        </Router>
      </Provider>
    );

    expect(screen.getByText("Germany")).toBeInTheDocument();
    expect(screen.getByText("France")).toBeInTheDocument();
  });

  test("calls dispatch when correct answer is selected", () => {
    const currentCountry = {
      opps: [0, 1],
    };

    render(
      <Provider store={store}>
        <Router>
          <Answers
            currentCountry={currentCountry}
            setCurrentCountry={() => {}}
            setKey={() => {}}
          />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText("Germany"));

    // Überprüfen, ob Dispatch-Aufrufe getätigt wurden
    expect(store.dispatch).toHaveBeenCalled();
  });
});
