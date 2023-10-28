import Title from '@components/Title'
import ViewLayout from '@components/ViewLayout'
import { useRoom } from '@hooks/rooms/useRoom'
import { Stack, Typography } from '@mui/material'
import { RouteComponentProps } from 'wouter'

export default function RoomDetails({ params }: RouteComponentProps) {
  const { data, isLoading } = useRoom(params.id!)
  return (
    <ViewLayout>
      <Stack gap={2}>
        <Title>Room Details</Title>
        {isLoading ? (
          'Loading'
        ) : (
          <Stack>
            <Stack>
              <Typography>Name</Typography>
            </Stack>
          </Stack>
        )}
      </Stack>
    </ViewLayout>
  )
}
