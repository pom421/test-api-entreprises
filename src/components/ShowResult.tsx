import * as React from "react"
import dynamic from "next/dynamic"
import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false })

export function ShowResult({
  backgroundColor = "lightblue",
  result,
  title,
  docLink,
}: {
  backgroundColor?: string
  result: any
  title: string
  docLink?: string
}) {
  return (
    <Box flex="1" border="1px solid lightgray">
      <Flex justifyContent="space-between" alignItems="center" backgroundColor={backgroundColor} px="2">
        <Text p="10px">{title}</Text>
        <Link href={docLink} textDecoration="underline">
          Doc&nbsp;
          <ExternalLinkIcon />
        </Link>
      </Flex>
      <Box p="10px" h="650px" overflow="scroll">
        {result && <DynamicReactJson src={result} />}
      </Box>
    </Box>
  )
}
