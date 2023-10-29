import Title from '@components/Title'
import ViewLayout from '@components/ViewLayout'
import { Skeleton, Stack, Typography } from '@mui/material'
import TableSkeleton from './Table'

export default function RoomDetailsSkeleton() {
  return (
    <ViewLayout>
      <Stack gap={2}>
        <Title>Room Details</Title>
        <Stack gap={4}>
          <Stack direction='row' justifyContent='space-between'>
            <Stack gap={4}>
              <Stack>
                <Typography variant='subtitle1' sx={{ color: 'info.dark' }}>
                  Name
                </Typography>
                <Skeleton
                  variant='text'
                  sx={{ fontSize: '2rem', width: 250 }}
                />
              </Stack>
              <Stack>
                <Typography variant='subtitle1' sx={{ color: 'info.dark' }}>
                  Type
                </Typography>
                <Skeleton
                  variant='text'
                  sx={{ fontSize: '2rem', width: 250 }}
                />
              </Stack>
            </Stack>
            <Stack gap={4}>
              <Stack gap={4}>
                <Stack>
                  <Typography variant='subtitle1' sx={{ color: 'info.dark' }}>
                    Location
                  </Typography>
                  <Skeleton
                    variant='text'
                    sx={{ fontSize: '2rem', width: 250 }}
                  />
                </Stack>
                <Stack>
                  <Typography variant='subtitle1' sx={{ color: 'info.dark' }}>
                    Capacity
                  </Typography>
                  <Skeleton
                    variant='text'
                    sx={{ fontSize: '2rem', width: 30 }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack gap={4}>
              <Stack>
                <Typography variant='subtitle1' sx={{ color: 'info.dark' }}>
                  Furniture
                </Typography>
                <Skeleton
                  variant='text'
                  sx={{ fontSize: '2rem', width: 250 }}
                />
              </Stack>
              <Stack>
                <Typography variant='subtitle1' sx={{ color: 'info.dark' }}>
                  Amenities
                </Typography>
                <Skeleton
                  variant='text'
                  sx={{ fontSize: '2rem', width: 250 }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant='subtitle1' sx={{ color: 'info.dark' }}>
              Participants
            </Typography>
            <TableSkeleton />
          </Stack>
        </Stack>
      </Stack>
    </ViewLayout>
  )
}
