import { AppLayout } from "@/components/layout/AppLayout"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"

describe("AppLayout", () => {
  it("renders sidebar and header", () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    )
    expect(screen.getByRole("banner")).toBeInTheDocument()
  })
})
