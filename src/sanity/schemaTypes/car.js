// src/sanity/schemaTypes/car.js

export const carSchema = {
  name: 'car',
  title: 'Cars',
  type: 'document',
  fields: [
    // ─── Basic Info ───────────────────────────────────────────
    {
      name: 'name',
      title: 'Car Name',
      type: 'string',
      description: 'e.g. Lamborghini Urus',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Auto-generated from name — click Generate',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. AED 1,150,000',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Show on Home Page (Featured)?',
      type: 'boolean',
      initialValue: false,
    },

    // ─── Brand ────────────────────────────────────────────────
    {
      name: 'brand',
      title: 'Car Brand / Make',
      type: 'string',
      description: 'e.g. Lamborghini',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'brandLogo',
      title: 'Brand Logo',
      type: 'image',
      description: 'Small brand logo shown on card',
      options: { hotspot: true },
    },

    // ─── Images ───────────────────────────────────────────────
    {
      name: 'mainImage',
      title: 'Main Car Image',
      type: 'image',
      description: 'Primary image shown on card and detail page',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery Images (up to 5)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Additional images shown in detail page gallery',
      validation: (Rule) => Rule.max(5),
    },

    // ─── Specifications ───────────────────────────────────────
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g. 2024',
    },
    {
      name: 'carType',
      title: 'Car Type',
      type: 'string',
      options: {
        list: [
          { title: 'SUV', value: 'SUV' },
          { title: 'Coupe', value: 'Coupe' },
          { title: 'Convertible', value: 'Convertible' },
          { title: 'Sedan', value: 'Sedan' },
          { title: 'Hatchback', value: 'Hatchback' },
        ],
      },
    },
    {
      name: 'condition',
      title: 'Car Condition',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'New' },
          { title: 'Used', value: 'Used' },
        ],
      },
    },
    {
      name: 'fuel',
      title: 'Fuel Type',
      type: 'string',
      options: {
        list: [
          { title: 'Petrol', value: 'Petrol' },
          { title: 'Diesel', value: 'Diesel' },
          { title: 'Hybrid', value: 'Hybrid' },
          { title: 'Electric', value: 'Electric' },
        ],
      },
    },
    {
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
      options: {
        list: [
          { title: 'Auto', value: 'Auto' },
          { title: 'Manual', value: 'Manual' },
        ],
      },
    },
    {
      name: 'engine',
      title: 'Engine',
      type: 'string',
      description: 'e.g. 4.0L',
    },
    {
      name: 'mileage',
      title: 'Mileage (KM)',
      type: 'string',
      description: 'e.g. 150',
    },
    {
      name: 'cylinders',
      title: 'Cylinders',
      type: 'string',
      description: 'e.g. 12',
    },
    {
      name: 'horsepower',
      title: 'Horsepower',
      type: 'string',
      description: 'e.g. 641 HP',
    },
    {
      name: 'bodyColor',
      title: 'Body Color',
      type: 'string',
      description: 'e.g. Steel Grey',
    },
    {
      name: 'stockId',
      title: 'Stock ID',
      type: 'string',
      description: 'e.g. ABC1234',
    },

    // ─── Overview ─────────────────────────────────────────────
    {
      name: 'overview',
      title: 'Overview / Description',
      type: 'text',
      rows: 5,
      description: 'Paragraph shown in detail page Overview section',
    },

    // ─── Features ─────────────────────────────────────────────
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Bluetooth, Built-in GPS, 360° Camera',
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