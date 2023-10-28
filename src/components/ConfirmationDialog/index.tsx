import * as React from 'react'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'

export interface ConfirmationDialogRawProps {
  id: string
  open: boolean
  title?: string
  onConfirm: () => void
  onClose: (value?: string) => void
}

export function ConfirmationDialog(props: ConfirmationDialogRawProps) {
  const { onClose, open, onConfirm, title, ...other } = props
  const radioGroupRef = React.useRef<HTMLElement>(null)

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus()
    }
  }

  const handleCancel = () => {
    onClose()
  }

  const handleOk = () => {
    onConfirm()
    onClose()
  }

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth='xs'
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>{title || 'Are you sure?'}</DialogTitle>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk} type='submit'>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}
