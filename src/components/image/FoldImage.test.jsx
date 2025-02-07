import { render, screen } from "@testing-library/react"
import FoldImages from "./FoldImage"

const imagesData = [{ id: 1, image: "/image1.png", alt: "image1" }]

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

  it("should read image and alt text", () => {
    const images = screen.getByTestId(1)

    expect(images).toBeInTheDocument()
    expect(images).toHaveAttribute("alt", "image1")
  })
})
