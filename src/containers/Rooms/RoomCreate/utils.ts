import type { Room, Lighting } from '../../../types.d.ts'
import { NewRoomInputs } from './types'

export const AMENITIES_OPTIONS = [
  'Whiteboard',
  'Projector',
  'Chalkboard',
  'Video Conferencing',
  'Audio Equipment',
  'Computer Stations',
  'Printer',
  'Quiet Environment',
  'Art Supplies',
  'Lab Equipment',
  'Safety Gear',
  'Musical Instruments',
  'Acoustic Panels',
  'Language Software',
  'Headsets',
  'Sports Equipment',
  'Locker Rooms'
]

export const TYPE_OPTIONS = [
  'Education',
  'Meeting',
  'Computer Lab',
  'Study',
  'Creative Arts',
  'Science Lab',
  'Music',
  'Language Learning',
  'Physical Education'
]

export function addMissingProps(roomInputs: NewRoomInputs): Room {
  const newRoom: Room = {
    ...roomInputs,
    id: crypto.randomUUID(),
    furniture: 'General Furniture',
    size: {
      length: '18',
      width: '25',
      height: '9'
    },
    accessories: {
      lighting: 'LED' as Lighting,
      ventilation: 'HVAC',
      storage: 'Cabinets'
    }
  }

  return newRoom
}
