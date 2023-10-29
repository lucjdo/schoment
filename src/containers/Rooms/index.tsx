import ViewLayout from '@components/ViewLayout'
import RoomsTable from '@components/Rooms/RoomsTable'
import { useRooms } from '@hooks/rooms/useRooms'
import ViewHeader from '@components/ViewHeader'
import TableSkeleton from '@components/Skeletons/Table'

export default function Rooms() {
  const { data, isLoading } = useRooms()

  return (
    <ViewLayout>
      <ViewHeader
        title='Rooms'
        btnProps={{
          label: 'New Room',
          disabled: isLoading,
          href: '/rooms/create'
        }}
      />
      {isLoading ? <TableSkeleton /> : <RoomsTable rooms={data!} />}
    </ViewLayout>
  )
}
