import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./context/store";
import App from "./App";

test("renders the expected content", () => {
  // Render the App innerhalb des Redux Providers
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Überprüfen, ob der "Start"-Button vorhanden ist
  const startButton = screen.getByText(/Start/i);
  expect(startButton).toBeInTheDocument();

  // Überprüfen, ob der "Namen Ändern"-Button vorhanden ist
  const changeNameButton = screen.getByText(/Namen Ändern/i);
  expect(changeNameButton).toBeInTheDocument();

  // Überprüfen, ob der "Zur Bestenliste"-Button vorhanden ist
  const leaderboardButton = screen.getByText(/Zur Bestenliste/i);
  expect(leaderboardButton).toBeInTheDocument();
});
