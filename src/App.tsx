import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import MainLayout from '@components/MainLayout'
import Menu from '@containers/Menu'
import Routes from '@containers/Routes'
import './App.css'
import { FeedbackProvider } from './context/Feedback'
import { Suspense, lazy } from 'react'
const LazyFeedbackMsg = lazy(() => import('@containers/FeedbackMsg'))

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedbackProvider>
        <MainLayout>
          <Menu />
          <Routes />
        </MainLayout>
        <Suspense fallback='Loading Feedback...'>
          <LazyFeedbackMsg />
        </Suspense>
      </FeedbackProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
