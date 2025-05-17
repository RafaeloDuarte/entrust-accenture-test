import { Header } from "@/components/layout/header/Header"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

describe("Header", () => {
  it("renders logo or user menu", () => {
    render(<Header />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
  })
})
