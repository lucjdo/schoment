import MainLayout from '@components/MainLayout'
import Menu from '@containers/Menu'
import Routes from '@containers/Routes'
import './App.css'

function App() {
  return (
    <MainLayout>
      <Menu />
      <Routes />
    </MainLayout>
  )
}

export default App
