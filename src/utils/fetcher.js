// fetcher

export async function fetcher(url, options) {
  const res = await fetch(url, options)
  return res.json()
}
