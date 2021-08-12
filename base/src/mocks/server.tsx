import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { SWRConfig } from "swr";

export const server = setupServer(...handlers);

export const SwrWrapper: React.FC = ({ children }) => (
  <SWRConfig
    value={{
      dedupingInterval: 0,
      shouldRetryOnError: false,
    }}
  >
    {children}
  </SWRConfig>
);
