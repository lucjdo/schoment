import ViewLayout from '@components/ViewLayout'
import {
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Select,
  Stack,
  Typography
} from '@mui/material'
import { AMENITIES_OPTIONS } from './utils'

export default function RoomCreate() {
  return (
    <ViewLayout>
      <Typography variant='h4' mb={3}>
        New Room
      </Typography>
      <form>
        <Stack></Stack>
        <Stack spacing={3} width={500}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <TextField placeholder='Type in here…' defaultValue='Classroom' />
          </FormControl>
          <FormControl>
            <FormLabel>Location</FormLabel>
            <TextField placeholder='Type in here…' defaultValue='Build 1' />
          </FormControl>
          <FormControl>
            <FormLabel>Capacity</FormLabel>
            <TextField
              placeholder='Type in here…'
              defaultValue={30}
              type='number'
            />
          </FormControl>
          <FormControl sx={{ m: 1 }}>
            <FormLabel id='demo-multiple-name-label'>Amenities</FormLabel>
            <Select
              labelId='demo-multiple-name-label'
              id='demo-multiple-name'
              value={[]}
              multiple
            >
              {AMENITIES_OPTIONS.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </form>
    </ViewLayout>
  )
}
