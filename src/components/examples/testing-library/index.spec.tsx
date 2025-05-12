import { fireEvent, render } from "@test";
import { TestingLibraryExample } from "./index";
describe("Component testing with testing-library", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <TestingLibraryExample onClick={() => undefined} />
    );
    expect(getByText("Click Me!")).toBeDefined();
  });
  it("button is clickable", () => {
    const mockFn = jest.fn();
    const { getByText } = render(<TestingLibraryExample onClick={mockFn} />);

    const btn = getByText("Click Me!");
    fireEvent.click(btn);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
