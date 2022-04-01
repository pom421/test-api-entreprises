import { Button } from "@chakra-ui/react"
import * as React from "react"

export function SirenExample({ siren, setSiren }) {
  return (
    <Button
      variant="link"
      textDecoration="underline"
      onClick={() => {
        setSiren(siren)
      }}
    >
      {siren}
    </Button>
  )
}
