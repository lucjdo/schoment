export interface Room {
  id: string
  name: string
  type: string
  capacity: number
  location: string
  furniture: string
  size: Size
  amenities: string[]
  accessories: Accessories
}

export interface Accessories {
  lighting: Lighting
  ventilation: string
  storage: string
}

export enum Lighting {
  Fluorescent = 'Fluorescent',
  LED = 'LED',
  NaturalLightAndSpotlights = 'Natural Light and Spotlights'
}

export interface Size {
  length: string
  width: string
  height: string
}
