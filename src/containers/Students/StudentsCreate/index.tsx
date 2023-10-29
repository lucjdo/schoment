import ViewLayout from '@components/ViewLayout'
import studentBook from '@assets/student-add.svg'

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
  const { register, handleSubmit, watch, reset } = useForm<NewStudentsInputs>()
  const { mutate } = useNewStudent()
  const { mutate: addToRoom } = useAddStudent()

  const onSubmit: SubmitHandler<NewStudentsInputs> = async (data) => {
    const newUser: Student = { ...data, id: crypto.randomUUID() }
    console.log(newUser)
    mutate(newUser)
    addToRoom({ student: newUser, roomId: data.room?.id })
    setOpenDialog(false)
    reset()
  }

  return (
    <ViewLayout>
      <Stack gap={2}>
        <Title>New Student</Title>
        <Stack direction='row' justifyContent='space-between'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} width={500}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <TextField
                  required
                  size='small'
                  placeholder='Type in here…'
                  {...register('firstname')}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <TextField
                  placeholder='Type in here…'
                  required
                  size='small'
                  {...register('lastname')}
                />
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <FormLabel>Gender</FormLabel>
                <Select
                  required
                  value={watch('gender')}
                  size='small'
                  {...register('gender')}
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
                  size='small'
                  required={true}
                  inputProps={{ min: 11, max: 17 }}
                  {...register('age')}
                />
              </FormControl>
              <FormControl sx={{ m: 1 }}>
                <FormLabel>Room</FormLabel>
                <Select
                  value={watch('room')}
                  size='small'
                  required
                  {...register('room')}
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
                  <Stack
                    gap={1}
                    justifyContent='space-around'
                    direction={'row'}
                  >
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
          <Stack
            alignItems={'center'}
            flexGrow={1}
            sx={{
              opacity: 0.7
            }}
          >
            <img src={studentBook} width={350} />
          </Stack>
        </Stack>
      </Stack>
    </ViewLayout>
  )
}
