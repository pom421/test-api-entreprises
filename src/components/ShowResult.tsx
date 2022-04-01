import { Box, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import * as React from "react"

const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false })

export function ShowResult({ backgroundColor = "lightblue", result }: { backgroundColor?: string; result: any }) {
  return (
    <Box flex="1" border="1px solid lightgray">
      <Text p="10px" backgroundColor={backgroundColor}>
        API entreprise
      </Text>
      <Box p="10px" h="650px" overflow="scroll">
        {result && <DynamicReactJson src={result} />}
      </Box>
    </Box>
  )
}
