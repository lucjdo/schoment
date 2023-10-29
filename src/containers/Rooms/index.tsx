import ViewLayout from '@components/ViewLayout'
import RoomsTable from '@components/Rooms/RoomsTable'
import { useRooms } from '@hooks/rooms/useRooms'
import ViewHeader from '@components/ViewHeader'

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
      {isLoading ? 'Loading Rooms' : <RoomsTable rooms={data!} />}
    </ViewLayout>
  )
}
