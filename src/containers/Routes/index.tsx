import { ErrorBoundary } from '@containers/ErrorBoundaries'
import Rooms from '@containers/Rooms'
import RoomCreate from '@containers/Rooms/RoomCreate'
import RoomDetails from '@containers/Rooms/RoomDetails'
import Students from '@containers/Students'
import StudentsCreate from '@containers/Students/StudentsCreate'
import { Redirect, Route, Switch } from 'wouter'

function RoomsRoutes() {
  return (
    <ErrorBoundary fallback={<p>Sorry! Something went with Rooms</p>}>
      <Switch>
        <Route path='/rooms'>
          <Rooms />
        </Route>
        <Route path='/rooms/create'>
          <RoomCreate />
        </Route>
        <Route path='/rooms/:id' component={RoomDetails} />
      </Switch>
    </ErrorBoundary>
  )
}

function StudentsRoutes() {
  return (
    <ErrorBoundary fallback={<p>Sorry! Something went with students</p>}>
      <Switch>
        <Route path='/students'>
          <Students />
        </Route>
        <Route path='/students/create'>
          <StudentsCreate />
        </Route>
      </Switch>
    </ErrorBoundary>
  )
}

export default function Routes() {
  return (
    <>
      <Route path='/'>
        <Redirect to='/rooms' />
      </Route>
      <RoomsRoutes />
      <StudentsRoutes />
    </>
  )
}
