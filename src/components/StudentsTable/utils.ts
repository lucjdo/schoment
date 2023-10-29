import { HeadCell } from './types'

export function maxRowsPerPage(totalAmount: number) {
  return Math.ceil(totalAmount / 5) * 5
}

export function getRowsOptions(maxNumber: number) {
  const options = []
  for (let i = 5; i <= maxNumber; i += 5) {
    options.push(i)
  }
  return options
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'firstname',
    disablePadding: true,
    label: 'First Name'
  },
  {
    id: 'lastname',
    disablePadding: false,
    label: 'Last Name'
  },
  {
    id: 'room',
    disablePadding: false,
    label: 'Room'
  },
  {
    id: 'gender',
    disablePadding: false,
    align: 'center',
    label: 'Gender'
  },
  {
    id: 'age',
    align: 'right',
    disablePadding: false,
    label: 'Age'
  }
]
