import { Skeleton, Stack } from '@mui/material'

export default function TableSkeleton() {
  return (
    <Stack gap={1}>
      <Skeleton variant='rounded' height={53} />
      <Skeleton variant='rounded' height={53} />
      <Skeleton variant='rounded' height={53} />
      <Skeleton variant='rounded' height={53} />
      <Skeleton variant='rounded' height={53} />
      <Skeleton variant='rounded' height={53} />
    </Stack>
  )
}
