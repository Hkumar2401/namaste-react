import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenuCategory from "../RestaurantMenuCategory";
import { act } from "react";
import MOCK_DATA from "../mocks/mockMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve();
    },
  });
});

it("Should add items to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenuCategory data={MOCK_DATA} showItems={true} />
        </Provider>
      </BrowserRouter>
    )
  );

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByTestId("addBtn");

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

});
