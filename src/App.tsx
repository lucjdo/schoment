import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import MainLayout from '@components/MainLayout'
import Menu from '@containers/Menu'
import Routes from '@containers/Routes'
import './App.css'
import FeedbackMsg from '@containers/FeedbackMsg'
import { FeedbackProvider } from './context/Feedback'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedbackProvider>
        <MainLayout>
          <Menu />
          <Routes />
        </MainLayout>
        <FeedbackMsg />
      </FeedbackProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
