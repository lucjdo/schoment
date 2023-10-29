import { createStudent } from '@services/students'
import { useQueryClient, useMutation } from 'react-query'

export function useNewStudent() {
  const queryClient = useQueryClient()

  return useMutation(createStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries('students')
    }
  })
}
