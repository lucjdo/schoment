import { Student } from 'src/types'

export interface RoomsTableProps {
  students: Student[]
}

export type Order = 'asc' | 'desc'

export interface HeadCell {
  disablePadding: boolean
  id: keyof Student
  label: string
  align?: 'right' | 'left' | 'center'
}

export interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Student
  ) => void
  order: Order
  orderBy: string
  rowCount: number
}
