// src/sanity/lib/queries.js
import { groq } from 'next-sanity'

// ─── Featured Cars (Home Page) ────────────────────────────────────────────────
// Sirf woh cars jo "featured" toggle ON ho
export const featuredCarsQuery = groq`
  *[_type == "car" && featured == true] | order(_createdAt desc) {
    _id,
    name,
    slug,
    price,
    brand,
    year,
    carType,
    condition,
    fuel,
    transmission,
    engine,
    mileage,
    "brandLogoUrl": brandLogo.asset->url,
    "mainImageUrl": mainImage.asset->url,
  }
`

// ─── All Cars (Showroom Page) ─────────────────────────────────────────────────
export const allCarsQuery = groq`
  *[_type == "car"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    price,
    brand,
    year,
    carType,
    condition,
    fuel,
    transmission,
    engine,
    mileage,
    "brandLogoUrl": brandLogo.asset->url,
    "mainImageUrl": mainImage.asset->url,
  }
`

// ─── Single Car Detail Page ───────────────────────────────────────────────────
export const carBySlugQuery = groq`
  *[_type == "car" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    price,
    brand,
    year,
    carType,
    condition,
    fuel,
    transmission,
    engine,
    mileage,
    cylinders,
    horsepower,
    bodyColor,
    stockId,
    overview,
    features,
    "brandLogoUrl": brandLogo.asset->url,
    "mainImageUrl": mainImage.asset->url,
    "galleryUrls": gallery[].asset->url,
  }
`

// ─── All Slugs (for generateStaticParams) ────────────────────────────────────
export const allCarSlugsQuery = groq`
  *[_type == "car" && defined(slug.current)] {
    "slug": slug.current
  }
`