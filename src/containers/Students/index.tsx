import ViewLayout from '@components/ViewLayout'
import { useStudents } from '@hooks/students/useStudents'
import StudentsTable from '@components/StudentsTable'
import ViewHeader from '@components/ViewHeader'

export default function Students() {
  const { data, isLoading } = useStudents()

  return (
    <ViewLayout>
      <ViewHeader
        title='Students'
        btnProps={{
          label: 'New Student',
          disabled: isLoading,
          href: '/students/create'
        }}
      />
      {isLoading ? 'Loading Students' : <StudentsTable students={data!} />}
    </ViewLayout>
  )
}
