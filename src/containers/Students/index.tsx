import ViewLayout from '@components/ViewLayout'
import { useStudents } from '@hooks/students/useStudents'
import StudentsTable from '@components/StudentsTable'
import ViewHeader from '@components/ViewHeader'
import TableSkeleton from '@components/Skeletons/Table'

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
      {isLoading ? <TableSkeleton /> : <StudentsTable students={data!} />}
    </ViewLayout>
  )
}
