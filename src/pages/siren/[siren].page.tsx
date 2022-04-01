import React from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"

import { normalizeSiren } from "@/utils/normalize"
import { GenericPage } from "./generic-page"

const QueryPage: NextPage = () => {
  const router = useRouter()
  const { siren } = router.query

  return <GenericPage siren={normalizeSiren(siren)} />
}

export default QueryPage
