import { Student } from 'src/types'
import STUDENTS from '../mocks/Students.json'
import { serviceFaker } from './serviceFaker'
import { getFromSession, setInSession } from './sessionStorage'

export function getStudents(): Promise<Student[]> {
  const sessionStudents = getFromSession('students')

  if (!sessionStudents) setInSession('students', STUDENTS)

  return serviceFaker(sessionStudents || STUDENTS)
}
