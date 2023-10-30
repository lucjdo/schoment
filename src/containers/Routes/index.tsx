import { ErrorBoundary } from '@containers/ErrorBoundaries'
import Rooms from '@containers/Rooms'
import RoomCreate from '@containers/Rooms/RoomCreate'
import RoomDetails from '@containers/Rooms/RoomDetails'
import Students from '@containers/Students'
import StudentsCreate from '@containers/Students/StudentsCreate'
import { Route, Switch } from 'wouter'

function RoomsRoutes() {
  return (
    <Switch>
      <ErrorBoundary fallback={<p>Sorry! Something went with Rooms</p>}>
        <Route path='/rooms'>
          <Rooms />
        </Route>
        <Route path='/rooms/create'>
          <RoomCreate />
        </Route>
        <Route path='/rooms/:id' component={RoomDetails} />
      </ErrorBoundary>
    </Switch>
  )
}

function StudentsRoutes() {
  return (
    <Switch>
      <ErrorBoundary fallback={<p>Sorry! Something went with students</p>}>
        <Route path='/students'>
          <Students />
        </Route>
        <Route path='/students/create'>
          <StudentsCreate />
        </Route>
      </ErrorBoundary>
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
