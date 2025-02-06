import { render, screen } from "@testing-library/react"
import FoldImages from "./FoldImage"
import { imagesData } from "../../lib/helper/data"

describe("FoldImage Component", () => {
  beforeEach(() => {
    render(<FoldImages images={imagesData} />)
  })

  it("renders correctly", () => {
    expect(screen.getAllByRole("img")).toHaveLength(imagesData.length)
  })

  it("have src and alt image", () => {
    imagesData.forEach((image) => {
      expect(image.image).not.toBeNull()
      expect(image.alt).not.toBeNull()
      expect(image.id).not.toBeNull()
    })
  })
})
