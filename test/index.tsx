import React, { ReactElement, FC } from "react";
import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";

import { Provider } from "react-redux";
import store from "@redux/store";

const AllTheProviders: FC = ({ children }) => {
  return (
    <Provider store={store}>{children}</Provider>
  );
};

const render = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
  baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
