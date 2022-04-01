import type { NextApiRequest, NextApiResponse } from "next"

import { normalizeSiren } from "@/utils/normalize"
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetcher } from "@/utils/fetcher"
import { success } from "../api-helpers"

type Data = {
  name: string
}

const entrepriseApiUrlBuilder = (token: string) => (siren: string) =>
  `https://entreprise.api.gouv.fr/v2/entreprises/${siren}?token=${token}&context=CadreDeLaRequ%C3%AAte&recipient=B%C3%A9n%C3%A9ficiaireDeL%E2%80%99appel&object=RaisonDeL%E2%80%99AppelOuIdentifiant`

// eslint-disable-next-line no-console
if (!process.env.API_ENTREPRISES_TOKEN) console.error("API_ENTREPRISES_TOKEN is not defined")

const url = entrepriseApiUrlBuilder(process.env.API_ENTREPRISES_TOKEN)

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { siren } = req.query

  if (!siren) return res.status(400)

  const result = await fetcher(url(normalizeSiren(siren)))

  success(res).json({ data: result })
}
