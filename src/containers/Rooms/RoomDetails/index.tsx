import RoomDetailsSkeleton from '@components/Skeletons/RoomDetails'
import StudentsTable from '@components/StudentsTable'
import Title from '@components/Title'
import ViewLayout from '@components/ViewLayout'
import { useRoom } from '@hooks/rooms/useRoom'
import { Stack, Typography } from '@mui/material'
import { RouteComponentProps } from 'wouter'

function Detail({
  property,
  value
}: {
  property: string
  value: string | number | string[]
}) {
  return (
    <Stack>
      <Typography variant='subtitle1' sx={{ color: 'info.dark' }}>
        {property}
      </Typography>
      <Typography variant='h5' sx={{ fontFamily: 'Open Sans' }}>
        {value}
      </Typography>
    </Stack>
  )
}

export default function RoomDetails({ params }: RouteComponentProps) {
  const { data, isLoading } = useRoom(params.id!)

  if (isLoading) return <RoomDetailsSkeleton />

  if (!data) return 'No Data'

  return (
    <ViewLayout>
      <Stack gap={2}>
        <Title>Room Details</Title>
        {isLoading ? (
          'Loading'
        ) : (
          <Stack gap={4}>
            <Stack direction='row' justifyContent='space-between'>
              <Stack gap={4}>
                <Detail property='Name' value={data.name} />
                <Detail property='Type' value={data.type} />
              </Stack>
              <Stack gap={4}>
                <Detail property='Location' value={data.location} />
                <Detail property='Capacity' value={data.capacity} />
              </Stack>
              <Stack gap={4}>
                <Detail property='Furniture' value={data.furniture} />
                <Detail
                  property='Amenities'
                  value={data.amenities.join(', ')}
                />
              </Stack>
            </Stack>
            <Stack>
              <Typography variant='subtitle1' sx={{ color: 'info.dark' }}>
                Participants
              </Typography>
              {data.students ? (
                <StudentsTable students={data.students} />
              ) : (
                <Typography variant='h6'>
                  No participants in this room
                </Typography>
              )}
            </Stack>
          </Stack>
        )}
      </Stack>
    </ViewLayout>
  )
}
