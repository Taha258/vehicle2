// src/sanity/schemaTypes/car.js

export const carSchema = {
  name: 'car',
  title: 'Automobili',
  type: 'document',
  fields: [
    // ─── Basic Info ───────────────────────────────────────────
    {
      name: 'name',
      title: 'Nome Auto',
      type: 'string',
      description: 'es. Lamborghini Urus',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Generato automaticamente dal nome — clicca su Generate',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Prezzo (EUR)',
      type: 'string',
      description: 'es. € 1.150.000',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Mostra in Home Page (In Evidenza)?',
      type: 'boolean',
      initialValue: false,
    },

    // ─── Brand ────────────────────────────────────────────────
    {
      name: 'brand',
      title: 'Marca / Produttore',
      type: 'string',
      description: 'es. Lamborghini',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'brandLogo',
      title: 'Logo del Brand',
      type: 'image',
      description: 'Piccolo logo del brand mostrato sulla scheda',
      options: { hotspot: true },
    },

    // ─── Images ───────────────────────────────────────────────
    {
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
      description: 'Immagine primaria mostrata nella scheda e nella pagina dei dettagli',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Galleria Immagini (fino a 5)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Immagini aggiuntive mostrate nella galleria dei dettagli',
      validation: (Rule) => Rule.max(5),
    },

    // ─── Specifications ───────────────────────────────────────
    {
      name: 'year',
      title: 'Anno',
      type: 'string',
      description: 'es. 2024',
    },
    {
      name: 'carType',
      title: 'Tipo di Auto',
      type: 'string',
      options: {
        list: [
          { title: 'SUV', value: 'SUV' },
          { title: 'Coupe', value: 'Coupe' },
          { title: 'Cabriolet', value: 'Convertible' },
          { title: 'Berlina', value: 'Sedan' },
          { title: 'Hatchback', value: 'Hatchback' },
        ],
      },
    },
    {
      name: 'condition',
      title: 'Condizione',
      type: 'string',
      options: {
        list: [
          { title: 'Nuovo', value: 'New' },
          { title: 'Usato', value: 'Used' },
        ],
      },
    },
    {
      name: 'fuel',
      title: 'Alimentazione',
      type: 'string',
      options: {
        list: [
          { title: 'Benzina', value: 'Petrol' },
          { title: 'Diesel', value: 'Diesel' },
          { title: 'Ibrida', value: 'Hybrid' },
          { title: 'Elettrica', value: 'Electric' },
          { title: 'GPL', value: 'LPG' },
        ],
      },
    },
    {
      name: 'transmission',
      title: 'Cambio',
      type: 'string',
      options: {
        list: [
          { title: 'Automatico', value: 'Auto' },
          { title: 'Manuale', value: 'Manual' },
        ],
      },
    },
    {
      name: 'engine',
      title: 'Motore',
      type: 'string',
      description: 'es. 4.0L',
    },
    {
      name: 'mileage',
      title: 'Chilometraggio (KM)',
      type: 'string',
      description: 'es. 150',
    },
    {
      name: 'cylinders',
      title: 'Cilindri',
      type: 'string',
      description: 'es. 12',
    },
    {
      name: 'horsepower',
      title: 'Cavalli',
      type: 'string',
      description: 'es. 641 CV',
    },
    {
      name: 'bodyColor',
      title: 'Colore Carrozzeria',
      type: 'string',
      description: 'es. Grigio Acciaio',
    },
    {
      name: 'stockId',
      title: 'ID Stock',
      type: 'string',
      description: 'es. ABC1234',
    },

    // ─── Overview ─────────────────────────────────────────────
    {
      name: 'overview',
      title: 'Panoramica / Descrizione',
      type: 'text',
      rows: 5,
      description: 'Paragrafo mostrato nella sezione Panoramica (se abilitata)',
    },

    // ─── Features ─────────────────────────────────────────────
    {
      name: 'features',
      title: 'Caratteristiche',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'es. Bluetooth, GPS Integrato, Telecamera 360°',
      options: {
        layout: 'tags',
      },
    },
  ],

  // Preview in Sanity Studio
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'mainImage',
    },
  },
}
