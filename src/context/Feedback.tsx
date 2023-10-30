// FeedbackContext.tsx
import { createContext, useState, ReactNode } from 'react'

// Define types and interfaces
type FeedbackMessageType = 'success' | 'error' | 'warning'

interface FeedbackMessage {
  text: string
  type: FeedbackMessageType
}

interface FeedbackContextType {
  message: FeedbackMessage | null
  showFeedbackMessage: (text: string, type: FeedbackMessageType) => void
  hideFeedbackMessage: () => void
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
)

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<FeedbackMessage | null>(null)

  const showFeedbackMessage = (text: string, type: FeedbackMessageType) => {
    setMessage({ text, type })
  }

  const hideFeedbackMessage = () => {
    setMessage(null)
  }

  return (
    <FeedbackContext.Provider
      value={{ message, showFeedbackMessage, hideFeedbackMessage }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
