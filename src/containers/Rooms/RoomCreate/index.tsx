import ViewLayout from '@components/ViewLayout'
import clasRoom from '@assets/clasroom.svg'
import {
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  Select,
  Stack,
  Button
} from '@mui/material'
import { AMENITIES_OPTIONS, TYPE_OPTIONS, addMissingProps } from './utils'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { ConfirmationDialog } from '@components/ConfirmationDialog'
import Title from '@components/Title'
import { NewRoomInputs } from './types'
import { useNewRoom } from '@hooks/rooms/useNewRoom'

export default function RoomCreate() {
  const [openDialog, setOpenDialog] = useState(false)
  const { register, handleSubmit, watch } = useForm<NewRoomInputs>({
    defaultValues: {
      name: 'Classroom',
      location: 'Build 1',
      capacity: 30,
      type: 'Education'
    }
  })
  const { mutate } = useNewRoom()

  const onSubmit: SubmitHandler<NewRoomInputs> = (data) => {
    const newRoom = addMissingProps(data)
    mutate(newRoom)
  }

  return (
    <ViewLayout>
      <Stack gap={2}>
        <Title>New Room</Title>
        <Stack direction='row' justifyContent='space-between'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} width={500}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <TextField
                  placeholder='Type in here…'
                  required
                  size='small'
                  {...register('name')}
                />
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <FormLabel>Type</FormLabel>
                <Select
                  value={watch('type')}
                  size='small'
                  {...register('type')}
                >
                  {TYPE_OPTIONS.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <TextField
                  placeholder='Type in here…'
                  required
                  size='small'
                  {...register('location')}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Capacity</FormLabel>
                <TextField
                  placeholder='Type in here…'
                  type='number'
                  required
                  size='small'
                  {...register('capacity')}
                />
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <FormLabel>Amenities</FormLabel>
                <Select
                  multiple
                  value={watch('amenities') || []}
                  {...register('amenities')}
                  size='small'
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
          <Stack
            alignItems={'center'}
            flexGrow={1}
            sx={{
              opacity: 0.7
            }}
          >
            <img src={clasRoom} width={400} />
          </Stack>
        </Stack>
      </Stack>
    </ViewLayout>
  )
}
