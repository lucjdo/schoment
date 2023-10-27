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
    id: 'name',
    disablePadding: true,
    label: 'Name'
  },
  {
    id: 'type',
    disablePadding: false,
    label: 'Type'
  },
  {
    id: 'location',
    disablePadding: false,
    align: 'center',
    label: 'Location'
  },
  {
    id: 'capacity',
    align: 'right',
    disablePadding: false,
    label: 'Capacity'
  }
]
