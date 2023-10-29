import { createRoom } from '@services/rooms'
import { useQueryClient, useMutation } from 'react-query'

export function useNewRoom() {
  const queryClient = useQueryClient()

  return useMutation(createRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries('rooms')
    }
  })
}
