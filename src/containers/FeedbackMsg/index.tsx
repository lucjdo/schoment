import { useContext } from 'react'
import { FeedbackContext } from '../../context/Feedback'
import { Snackbar, Alert } from '@mui/material'

export default function FeedbackMsg() {
  const feedbackContext = useContext(FeedbackContext)
  return (
    <Snackbar
      open={!!feedbackContext?.message}
      autoHideDuration={6000}
      onClose={() => feedbackContext?.hideFeedbackMessage()}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={() => feedbackContext?.hideFeedbackMessage()}
        severity={feedbackContext?.message?.type || 'success'}
        sx={{ width: '100%', fontSize: 'rem' }}
      >
        {feedbackContext?.message?.text}
      </Alert>
    </Snackbar>
  )
}
