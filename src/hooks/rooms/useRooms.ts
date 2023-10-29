import { useQuery } from 'react-query'
import { getRooms } from '@services/rooms'
import { Room } from '../../types'

export function useRooms() {
  return useQuery<Room[]>('rooms', getRooms)
}
