import { fetcher } from "@/utils/fetcher"
import { Spinner, Text } from "@chakra-ui/react"
import * as React from "react"
import useSWR from "swr"

import { ShowResult } from "@/components/ShowResult"

const VALIDATE_SIREN_API_URL = "https://dev.egapro.fabrique.social.gouv.fr/api/validate-siren?siren="

export function ShowApiEgapro({
  backgroundColor = "lightgreen",
  siren,
  title,
  docLink,
}: {
  backgroundColor: string
  siren: string
  title: string
  docLink: string
}) {
  const { data, error } = useSWR(siren ? VALIDATE_SIREN_API_URL + siren : null, fetcher)

  if (!siren) return null
  if (error) return <Text>Erreur</Text>
  if (!data) return <Spinner />

  return <ShowResult backgroundColor={backgroundColor} result={data} docLink={docLink} title={title} />
}
