// src/sanity/lib/client.js
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

// Development mein cache bypass karne ke liye
export const clientFetch = (query, params = {}) => {
  return client.fetch(query, params, {
    cache: 'no-store', // Har baar fresh data Sanity se aayega
  })
}