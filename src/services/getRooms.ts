import { Room } from 'src/types'
import ROOMS from '../mocks/Rooms.json'
import { serviceFaker } from './serviceFaker'
import { getFromSession, setInSession } from './sessionStorage'

export async function getRooms(): Promise<Room[]> {
  const sessionRooms = getFromSession('rooms')

  if (!sessionRooms) setInSession('rooms', ROOMS)

  return serviceFaker(sessionRooms || ROOMS)
}
