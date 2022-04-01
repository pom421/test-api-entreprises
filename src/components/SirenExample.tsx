import * as React from "react"
import { useRouter } from "next/router"
import { Button } from "@chakra-ui/react"

export function SirenExample({ siren }) {
  const router = useRouter()

  return (
    <Button
      variant="link"
      textDecoration="underline"
      onClick={() => {
        router.push("/siren/" + siren)
      }}
    >
      {siren}
    </Button>
  )
}
