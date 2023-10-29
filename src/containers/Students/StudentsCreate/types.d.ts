export type NewStudentsInputs = {
  firstname: string
  lastname: string
  age: number
  gender: 'Male' | 'Female'
  room: { id: string; name: string }
}
