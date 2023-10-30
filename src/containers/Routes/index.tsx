import { Suspense, lazy } from 'react'
import { ErrorBoundary } from '@containers/ErrorBoundaries'
import Rooms from '@containers/Rooms'
import Students from '@containers/Students'

const StudentsCreate = lazy(() => import('@containers/Students/StudentsCreate'))
const RoomCreate = lazy(() => import('@containers/Rooms/RoomCreate'))
const RoomDetails = lazy(() => import('@containers/Rooms/RoomDetails'))

import { Redirect, Route, Switch } from 'wouter'

function RoomsRoutes() {
  return (
    <ErrorBoundary fallback={<p>Sorry! Something went with Rooms</p>}>
      <Suspense fallback='Loading Room routes'>
        <Switch>
          <Route path='/rooms'>
            <Rooms />
          </Route>
          <Route path='/rooms/create'>
            <RoomCreate />
          </Route>
          <Route path='/rooms/:id' component={RoomDetails} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  )
}

function StudentsRoutes() {
  return (
    <ErrorBoundary fallback={<p>Sorry! Something went with students</p>}>
      <Suspense fallback='Loading Student routes'>
        <Switch>
          <Route path='/students'>
            <Students />
          </Route>
          <Route path='/students/create'>
            <StudentsCreate />
          </Route>
        </Switch>
      </Suspense>
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
