import { Room, Student } from 'src/types'
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

export function getRoomById(id: string): Promise<Room> | null {
  const sessionRooms: Room[] = getFromSession('rooms')
  const roomFinded = sessionRooms.find((room) => room.id === id)

  if (!roomFinded) return null
  return serviceFaker(roomFinded)
}

export async function addStudentToRoom({
  student,
  roomId
}: {
  student: Student
  roomId: string
}): Promise<Room[]> {
  const rooms = await getRooms()
  const roomIndex = rooms.findIndex((room) => room.id === roomId)
  const room = rooms.find((r) => r.id === roomId)!
  const newStudents = [...(room?.students || []), student]
  const newRoom = { ...room, students: newStudents }
  const newRooms = [
    ...rooms.slice(0, roomIndex),
    newRoom,
    ...rooms.slice(roomIndex + 1)
  ]
  setInSession('rooms', newRooms)
  return serviceFaker(newRooms)
}
