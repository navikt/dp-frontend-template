require("next");
import "@testing-library/jest-dom/extend-expect";
import { cache } from "swr";

import { server } from "./src/mocks/server.tsx";

beforeAll(() => server.listen());
beforeEach(() => cache.clear());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
