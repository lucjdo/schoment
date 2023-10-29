import Rooms from '@containers/Rooms'
import RoomCreate from '@containers/Rooms/RoomCreate'
import RoomDetails from '@containers/Rooms/RoomDetails'
import Students from '@containers/Students'
import { Route, Switch } from 'wouter'

function RoomsRoutes() {
  return (
    <Switch>
      <Route path='/rooms'>
        <Rooms />
      </Route>
      <Route path='/rooms/create'>
        <RoomCreate />
      </Route>
      <Route path='/rooms/:id' component={RoomDetails} />
    </Switch>
  )
}

export default function Routes() {
  return (
    <>
      <RoomsRoutes />
      <Route path='/students'>
        <Students />
      </Route>
    </>
  )
}
