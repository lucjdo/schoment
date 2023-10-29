import ViewLayout from '@components/ViewLayout'

import {
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  Select,
  Stack,
  Button,
  Typography
} from '@mui/material'
import { GENDER_OPTIONS, ROOM_OPTIONS } from './utils'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import Title from '@components/Title'
import { NewStudentsInputs } from './types'
import { useNewStudent } from '@hooks/students/useNewStudent'
import { Student } from 'src/types'
import { useAddStudent } from '@hooks/rooms/useAddStudent'

export default function StudentsCreate() {
  const [openDialog, setOpenDialog] = useState(false)
  const { register, handleSubmit, watch } = useForm<NewStudentsInputs>({})
  const { mutate } = useNewStudent()
  const { mutate: addToRoom } = useAddStudent()

  const onSubmit: SubmitHandler<NewStudentsInputs> = (data) => {
    const newUser: Student = { ...data, id: crypto.randomUUID() }
    mutate(newUser)
    addToRoom({ student: newUser, roomId: data.room.id })
  }

  return (
    <ViewLayout>
      <Stack gap={2}>
        <Title>New Student</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} width={500}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <TextField
                placeholder='Type in here…'
                {...(register('firstname'), { required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <TextField
                placeholder='Type in here…'
                required
                {...register('lastname')}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }}>
              <FormLabel>Gender</FormLabel>
              <Select
                value={watch('gender')}
                {...(register('gender'), { required: true })}
              >
                {GENDER_OPTIONS.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <TextField
                placeholder='Type in here…'
                type='number'
                required={true}
                inputProps={{ min: 11, max: 17 }}
                {...register('age')}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }}>
              <FormLabel>Room</FormLabel>
              <Select
                value={watch('room')}
                {...(register('room'), { required: true })}
              >
                {ROOM_OPTIONS.map((type) => (
                  <MenuItem key={type.id} value={type as unknown as string}>
                    {type.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {openDialog ? (
              <Stack gap={2}>
                <Typography variant='body1' sx={{ color: 'red' }}>
                  Are you sure you want to create this student?
                </Typography>
                <Stack gap={1} justifyContent='space-around' direction={'row'}>
                  <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                  <Button variant='contained' type='submit'>
                    Yes, Create
                  </Button>
                </Stack>
              </Stack>
            ) : (
              <Button variant='contained' onClick={() => setOpenDialog(true)}>
                Save
              </Button>
            )}
          </Stack>
        </form>
      </Stack>
    </ViewLayout>
  )
}
