import { useQuery } from 'react-query'
import { Student } from '../../types'
import { getStudents } from '@services/students'

export function useStudents() {
  return useQuery<Student[]>('students', getStudents)
}
