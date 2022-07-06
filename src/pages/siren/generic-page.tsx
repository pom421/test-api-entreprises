import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Box, Button, Flex, FormControl, FormLabel, HStack, Image, Input, Text } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

import { ShowApiRechercheResult } from "@/components/ShowApiRechercheResult"
import { ShowApiEntrepriseResult } from "@/components/ShowApiEntrepriseResult"
import { SirenExample } from "@/components/SirenExample"
import { ShowApiEgapro } from "@/components/ShowApiEgapro"

function isValidSiren(siren: string) {
  return /^\d{9}$/.test(siren)
}

export const GenericPage: NextPage<{ siren?: string }> = ({ siren: initialSiren }) => {
  const [siren, setSiren] = React.useState("")

  React.useEffect(() => {
    if (initialSiren) {
      setSiren(initialSiren)
    }
  }, [initialSiren])

  function handleChange(e) {
    setSiren(e.target.value)
  }

  return (
    <div>
      <Head>
        <title>Test API</title>
        <meta name="description" content="Test for various french API entreprises" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex minH="100vh" direction="column">
        <Box as="main" flex="1">
          <FormControl>
            <FormLabel htmlFor="siren">SIREN</FormLabel>
            <Input id="siren" type="text" onChange={handleChange} value={siren} placeholder="SIREN sur 9 caractères" />
          </FormControl>

          <Flex justifyContent="space-between">
            <HStack spacing="2" mt="4">
              <Button
                as="a"
                href={`https://annuaire-entreprises.data.gouv.fr/entreprise/${siren}`}
                disabled={!isValidSiren(siren)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Annuaire entreprise&nbsp;
                <ExternalLinkIcon mx="2px" />
              </Button>
              <Button
                as="a"
                href={`https://www.pappers.fr/entreprise/${siren}`}
                disabled={!isValidSiren(siren)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pappers&nbsp;
                <ExternalLinkIcon mx="2px" />
              </Button>
            </HStack>
            <HStack>
              <Text>Exemples de Siren :</Text>
              <SirenExample siren="443007778" />
              <SirenExample siren="345311765" />
              <SirenExample siren="412653180" />
              <SirenExample siren="850699323" />
              <SirenExample siren="771200318" />
              <SirenExample siren="418180683" />
            </HStack>
          </Flex>
          <HStack mt="4">
            <ShowApiEntrepriseResult
              title="API Entreprise"
              backgroundColor="lightblue"
              siren={siren}
              docLink="https://entreprise.api.gouv.fr/catalogue/"
            />
            <ShowApiRechercheResult
              title="API recherche-entreprises (CDTN)"
              backgroundColor="lightgreen"
              siren={siren}
              docLink="https://github.com/SocialGouv/recherche-entreprises"
            />
            <ShowApiEgapro
              title="API validate-siren (Egapro)"
              backgroundColor="lightsalmon"
              siren={siren}
              docLink="https://github.com/SocialGouv/egapro-api/blob/master/egapro/views.py"
            />
          </HStack>
        </Box>

        <Box as="footer" mb="20px">
          <a href="https://github.com/pom421/test-api-entreprises" target="_blank" rel="noopener noreferrer">
            <HStack justifyContent="center">
              <Box>Contribuez sur GitHub&nbsp;</Box>
              <Image
                boxSize="30"
                objectFit="cover"
                src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
                alt="GitHub logo"
              />
            </HStack>
          </a>
        </Box>
      </Flex>
    </div>
  )
}
