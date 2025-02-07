import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react"
import PopupLayout from "../PopupLayout"

describe("PopupLayout Component", () => {
  beforeEach(() => {
    render(
      <PopupLayout
        lists={"popup-layout-test"}
        render={(data) => <div>{data}</div>}
      >
        {(data) => <div>{data}</div>}
      </PopupLayout>,
    )
  })
  afterAll(() => cleanup())

  it("should render correctly!", () => {
    expect(screen.getByTestId("popup-layout")).toBeInTheDocument()
  })

  it("should render list correctly!", () => {
    expect(screen.getByTestId("popup-layout")).toHaveTextContent(
      "popup-layout-test",
    )
  })

  it("should render popup layout correctly!", async () => {
    const container = screen.getByTestId("popup-layout")
    fireEvent.click(container)

    await waitFor(() => {
      expect(screen.getByTestId("popup-layout-content")).toBeInTheDocument()
      expect(screen.getByTestId("popup-layout-content")).toHaveTextContent(
        "popup-layout-test",
      )
    })
  })
})
