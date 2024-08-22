import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Dialog from "./Dialog";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mockStore = configureStore([]);
const store = mockStore({
  game: {
    name: "player 1",
    points: 100,
  },
});

describe("Dialog Component", () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("renders Dialog component", () => {
    render(
      <Provider store={store}>
        <Dialog onClose={jest.fn()} />
      </Provider>
    );
    expect(
      screen.getByLabelText(/Bitte gib deinen Namen ein/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Speichern/i })
    ).toBeInTheDocument();
  });

  test("updates the input value when typing", () => {
    render(
      <Provider store={store}>
        <Dialog onClose={jest.fn()} />
      </Provider>
    );
    const input = screen.getByLabelText(/Bitte gib deinen Namen ein/i);
    fireEvent.change(input, { target: { value: "TestName" } });
    expect(input.value).toBe("TestName");
  });

  test("saves the new name and updates the leaderboard on save", async () => {
    mockAxios
      .onPost("http://localhost:3001/getAndUpdateLeaderboard")
      .reply(200, {
        leaderboard: [],
      });

    render(
      <Provider store={store}>
        <Dialog onClose={jest.fn()} />
      </Provider>
    );
    fireEvent.change(screen.getByLabelText(/Bitte gib deinen Namen ein/i), {
      target: { value: "TestName" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Speichern/i }));

    await waitFor(() => expect(mockAxios.history.post.length).toBe(1));
  });

  test("closes the dialog when clicking outside", () => {
    const onCloseMock = jest.fn();
    render(
      <Provider store={store}>
        <Dialog onClose={onCloseMock} />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("dialog-background"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
