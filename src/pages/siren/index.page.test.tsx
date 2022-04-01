import QueryPage from "@/pages/siren/index.page"
import { render } from "@testing-library/react"

test("render as expected", () => {
  render(<QueryPage />)

  expect(document.body.innerHTML).toMatchSnapshot()
})
