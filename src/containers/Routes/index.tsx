import Rooms from '@containers/Rooms'
import RoomCreate from '@containers/Rooms/RoomCreate'
import RoomDetails from '@containers/Rooms/RoomDetails'
import Students from '@containers/Students'
import StudentsCreate from '@containers/Students/StudentsCreate'
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

function StudentsRoutes() {
  return (
    <Switch>
      <Route path='/students'>
        <Students />
      </Route>
      <Route path='/students/create'>
        <StudentsCreate />
      </Route>
    </Switch>
  )
}

export default function Routes() {
  return (
    <>
      <RoomsRoutes />
      <StudentsRoutes />
    </>
  )
}
