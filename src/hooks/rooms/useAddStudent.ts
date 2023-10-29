import { addStudentToRoom } from '@services/rooms'
import { useQueryClient, useMutation } from 'react-query'

export function useAddStudent() {
  const queryClient = useQueryClient()

  return useMutation(addStudentToRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries('rooms')
    }
  })
}
