import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("should render Header Component", () => {
  it("should have a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Log In" });

    expect(loginButton).toBeInTheDocument();
  });

  it("should have a login button which changes to Logout button on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Log Out" });

    expect(logoutButton).toBeInTheDocument();
  });

  it("shout have a cart which has 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cart = screen.getByText("Cart (0 items)");

    expect(cart).toBeInTheDocument();
    
    
  });
});
