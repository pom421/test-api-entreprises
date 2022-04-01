import { fetcher } from "@/utils/fetcher"
import { Spinner, Text } from "@chakra-ui/react"
import * as React from "react"
import useSWR from "swr"

import { ShowResult } from "@/components/ShowResult"

const URL_API_ENTREPRISE = "/api/proxy-api-entreprise/"

export function ShowApiEntrepriseResult({
  backgroundColor = "lightblue",
  siren,
  title,
  docLink,
}: {
  backgroundColor: string
  siren: string
  title: string
  docLink: string
}) {
  const { data, error } = useSWR(siren ? URL_API_ENTREPRISE + siren : null, fetcher)

  if (!siren) return null
  if (error) return <Text>Erreur</Text>
  if (!data) return <Spinner />

  return <ShowResult backgroundColor={backgroundColor} result={data} docLink={docLink} title={title} />
}
