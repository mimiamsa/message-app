import { render, screen } from "@testing-library/react";
import App from "../pages";
import { Provider } from "react-redux";
import store from "../store/store";
describe("App", () => {
  it("should render correctly App", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
