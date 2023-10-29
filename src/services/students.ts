import { Student } from 'src/types'
import STUDENTS from '../mocks/Students.json'
import { serviceFaker } from './serviceFaker'
import { getFromSession, setInSession } from './sessionStorage'

export function getStudents(): Promise<Student[]> {
  const sessionStudents = getFromSession('students')

  if (!sessionStudents) setInSession('students', STUDENTS)

  return serviceFaker(sessionStudents || STUDENTS)
}

export function createStudent(newStudent: Student): Promise<Student> {
  const sessionStudents = getFromSession('students')
  const currentStudents = sessionStudents || STUDENTS
  const newStudents = [...currentStudents, newStudent]
  setInSession('students', newStudents)
  return serviceFaker(newStudents)
}
