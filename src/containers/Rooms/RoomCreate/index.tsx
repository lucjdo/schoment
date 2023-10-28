import ViewLayout from '@components/ViewLayout'
import {
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  Select,
  Stack,
  Button
} from '@mui/material'
import { AMENITIES_OPTIONS } from './utils'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { ConfirmationDialog } from '@components/ConfirmationDialog'
import Title from '@components/Title'
import { NewRoomInputs } from './types'

export default function RoomCreate() {
  const [openDialog, setOpenDialog] = useState(false)
  const { register, handleSubmit, watch } = useForm<NewRoomInputs>()
  const onSubmit: SubmitHandler<NewRoomInputs> = (data) => console.log(data)

  return (
    <ViewLayout>
      <Stack gap={2}>
        <Title>New Room</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} width={500}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <TextField
                placeholder='Type in here…'
                defaultValue='Classroom'
                required
                {...register('name')}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Location</FormLabel>
              <TextField
                placeholder='Type in here…'
                defaultValue='Build 1'
                required
                {...register('location')}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Capacity</FormLabel>
              <TextField
                placeholder='Type in here…'
                defaultValue={30}
                type='number'
                required
                {...register('capacity')}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }}>
              <FormLabel id='demo-multiple-name-label'>Amenities</FormLabel>
              <Select
                id='amenities-multiple'
                multiple
                value={watch('amenities') || []}
                {...register('amenities')}
              >
                {AMENITIES_OPTIONS.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant='contained' onClick={() => setOpenDialog(true)}>
              Save
            </Button>
          </Stack>
          <ConfirmationDialog
            id='create-new-rom-dialog'
            title='Are you sure you want to create this new room?'
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            onConfirm={handleSubmit(onSubmit)}
          />
        </form>
      </Stack>
    </ViewLayout>
  )
}
