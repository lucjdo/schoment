import { useMutation, useQuery, useQueryClient } from 'react-query'
import { createRoom, getRooms } from '@services/rooms'
import { Room } from '../types'

export function useRooms() {
  return useQuery<Room[]>('rooms', getRooms)
}

export function useNewRoom() {
  const queryClient = useQueryClient()

  return useMutation(createRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries('rooms')
    }
  })
}
