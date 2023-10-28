import { useQuery } from 'react-query'
import { getRoomById } from '@services/rooms'
import { Room } from '../../types'

export function useRoom(id: string) {
  return useQuery<Room | null>(['room', id], () => getRoomById(id))
}
