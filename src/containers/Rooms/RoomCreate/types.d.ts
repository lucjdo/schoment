import { AMENITIES_OPTIONS } from './utils'

export type NewRoomInputs = {
  name: string
  location: string
  capacity: number
  amenities: typeof AMENITIES_OPTIONS
}
