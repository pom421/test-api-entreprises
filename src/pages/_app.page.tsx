import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"

import { ChakraProvider, Stack, Heading } from "@chakra-ui/react"
import theme from "../theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Stack spacing={8} px="35" maxW="1600" margin="auto">
        <Heading as="h1">API Entreprises vs Recherche entreprises</Heading>
        <Component {...pageProps} />
      </Stack>
    </ChakraProvider>
  )
}

export default MyApp
