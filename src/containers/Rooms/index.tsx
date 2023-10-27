import { Typography } from '@mui/material'
import ROOMS from '../../mocks/Rooms.json'
import ViewLayout from '@components/ViewLayout'

export default function Rooms() {
  return (
    <ViewLayout>
      <Typography variant='h4'>Rooms</Typography>
      {JSON.stringify(ROOMS)}
    </ViewLayout>
  )
}
