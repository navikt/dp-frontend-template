import { rest } from "msw";
import api from "../lib/api";

export const handlers = [
  rest.get(api("/greeting"), (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  }),
];
