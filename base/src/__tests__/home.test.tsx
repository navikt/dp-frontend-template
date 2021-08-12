import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Home from "../pages/index";

expect.extend(toHaveNoViolations);

test("should be accessible", async () => {
  const htmlElement = render(<Home />).container;

  expect(await axe(htmlElement)).toHaveNoViolations();
});

test("rendrer heading", async () => {
  render(<Home />);


    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
      level: 1
    })

    expect(heading).toBeInTheDocument()
});
