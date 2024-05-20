import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";
import UserClass from "../UserClass";

describe("Should load About Component", () => {
  it("Should load heading", () => {
    render(<About />);

    const heading = screen.getByText("About Us");

    expect(heading).toBeInTheDocument();
  });

  it("Should load all headings in UserClass component", () => {
    render(
      <About>
        <UserClass />
      </About>
    );

    const name = screen.getByText("Name : Hemant");

    expect(name).toBeInTheDocument();
  });
});
