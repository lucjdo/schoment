import Title from '@components/Title'
import ViewLayout from '@components/ViewLayout'
import { Stack, Typography } from '@mui/material'
import { RouteComponentProps } from 'wouter'

export default function RoomDetails({ params }: RouteComponentProps) {
  return (
    <ViewLayout>
      <Stack gap={2}>
        <Title>Room Details</Title>
        <Stack>
          <Stack>
            <Typography>Name</Typography>
          </Stack>
        </Stack>
      </Stack>
    </ViewLayout>
  )
}
