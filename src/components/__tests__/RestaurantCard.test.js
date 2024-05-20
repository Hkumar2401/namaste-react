import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withPromotedLabel } from "../RestaurantCard";
import resData from "../mocks/RestaurantCardMock";
import "@testing-library/jest-dom";

describe("Should render Restauant Card Component", () => {
  it("Should render Restaurant Card Component with props Data", () => {
    render(<RestaurantCard resData={resData} />);

    const name = screen.getByText("Bakingo");

    expect(name).toBeInTheDocument();
  });

  it("Should render Restaurant Card Component with props Data", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    render(<RestaurantCardPromoted resData={resData} />);

    const label = screen.getByText("Promoted");

    expect(label).toBeInTheDocument();
  });
});
