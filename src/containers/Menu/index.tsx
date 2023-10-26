import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import GroupIcon from '@mui/icons-material/Group'
import MenuUI from '@components/Menu'
import { MenuItem } from '@components/Menu/types'

const MENU_SECTIONS: MenuItem[] = [
  { label: 'Rooms', icon: <MeetingRoomIcon fontSize='medium' /> },
  { label: 'Students', icon: <GroupIcon fontSize='medium' /> }
  // Add more sections here as needed
]

export default function Menu() {
  return <MenuUI sections={MENU_SECTIONS} appName='ScholMent' />
}
