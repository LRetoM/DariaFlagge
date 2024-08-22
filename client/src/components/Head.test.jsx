import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Head from "./Head";

const mockStore = configureStore([]);

describe("Head Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      game: {
        points: 10,
        lifes: 3,
        questionType: "country",
      },
    });
  });

  test("renders points and lives correctly", () => {
    render(
      <Provider store={store}>
        <Head
          currentCountry={{
            country: "Germany",
            flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
          }}
        />
      </Provider>
    );

    // Überprüfen, ob die Punkte und Leben korrekt angezeigt werden
    expect(screen.getByText(/Punkte: 10/i)).toBeInTheDocument();
    expect(screen.getByText(/Leben: 3/i)).toBeInTheDocument();
  });
});
