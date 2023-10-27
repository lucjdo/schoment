import { Room } from 'src/types'

export interface RoomsTableProps {
  rooms: Room[]
}

export type Order = 'asc' | 'desc'

export interface HeadCell {
  disablePadding: boolean
  id: keyof Room
  label: string
  align?: 'right' | 'left' | 'center'
}

export interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Room
  ) => void
  order: Order
  orderBy: string
  rowCount: number
}
