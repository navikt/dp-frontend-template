import { rest } from "msw";
import { fireEvent, render, screen } from "@testing-library/react";
import Greeting from "./greeting";
import { server, SwrWrapper } from "../mocks/server";

test.only("loads and displays greeting", async () => {
  render(<Greeting />, { wrapper: SwrWrapper });

  fireEvent.click(screen.getByText("Load Greeting"));

  expect(await screen.findByRole("heading")).toHaveTextContent("hello there");
});

test("handles server error", async () => {
  server.use(
    rest.get("/greeting", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Greeting />, { wrapper: SwrWrapper });

  fireEvent.click(screen.getByText("Load Greeting"));

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Oops, failed to fetch!"
  );
});
