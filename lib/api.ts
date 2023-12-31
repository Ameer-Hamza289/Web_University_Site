import qs from "qs"

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
  }${path}`
}

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }

  // Build request URL
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(`${path}${queryString ? `?${queryString}` : ""}`)}`

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions)

  // Handle response
  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occurred please try again`)
  }
  const data = await response.json()
  return data
}