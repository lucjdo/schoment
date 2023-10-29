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
  students?: Student[]
}

export interface Student {
  firstname: string
  lastname: string
  id: number
  age: number
  gender: 'Male' | 'Female'
  room: Pick<Room, 'id' | 'name'>
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
