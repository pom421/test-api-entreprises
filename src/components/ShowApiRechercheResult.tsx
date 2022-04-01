import { fetcher } from "@/utils/fetcher"
import { Spinner, Text } from "@chakra-ui/react"
import * as React from "react"
import useSWR from "swr"

import { ShowResult } from "@/components/ShowResult"

const RECHERCHE_API_URL = "https://search-recherche-entreprises.fabrique.social.gouv.fr/api/v1/entreprise/"

export function ShowApiRechercheResult({
  backgroundColor = "lightblue",
  siren,
}: {
  backgroundColor: string
  siren: string
}) {
  const { data, error } = useSWR(siren ? RECHERCHE_API_URL + siren : null, fetcher)

  if (!siren) return null
  if (error) return <Text>Erreur</Text>
  if (!data) return <Spinner />

  return <ShowResult backgroundColor={backgroundColor} result={data} />
}
