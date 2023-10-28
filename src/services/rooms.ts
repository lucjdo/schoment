import { Room } from 'src/types'
import ROOMS from '../mocks/Rooms.json'
import { serviceFaker } from './serviceFaker'
import { getFromSession, setInSession } from './sessionStorage'

export function getRooms(): Promise<Room[]> {
  const sessionRooms = getFromSession('rooms')

  if (!sessionRooms) setInSession('rooms', ROOMS)

  return serviceFaker(sessionRooms || ROOMS)
}

export function createRoom(newRoom: Room): Promise<Room> {
  const sessionRooms = getFromSession('rooms')
  const currentRooms = sessionRooms || ROOMS
  const newRooms = [...currentRooms, newRoom]
  setInSession('rooms', newRooms)
  return serviceFaker(newRooms)
}
