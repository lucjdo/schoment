import { useQuery } from 'react-query'
import { getRooms } from '@services/getRooms'
import { Room } from 'src/types'

export function useRooms() {
  return useQuery<Room[]>('rooms', getRooms)
}
