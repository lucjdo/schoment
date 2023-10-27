import Rooms from '@containers/Rooms'
import { Route, Switch } from 'wouter'

export default function Routes() {
  return (
    <Switch>
      <Route path='/rooms'>
        <Rooms />
      </Route>
      <Route path='/rooms/:id'>Room</Route>
      <Route path='/students'>Students</Route>
    </Switch>
  )
}
