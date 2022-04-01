export const normalizeSiren = (siren) => (Array.isArray(siren) ? (siren.length ? siren[0] : "") : siren)
