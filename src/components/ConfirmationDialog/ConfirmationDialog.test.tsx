import { render, screen, fireEvent } from '@testing-library/react'
import { ConfirmationDialog } from '.'

const onConfirmMock = vi.fn()
const onCancelMock = vi.fn()

describe('Confirmation Dialog', () => {
  beforeEach(() => {
    render(
      <ConfirmationDialog
        id='dialog-test'
        open={true}
        title='is this a test?'
        onConfirm={onConfirmMock}
        onClose={onCancelMock}
      />
    )
  })

  test('should render the modal', () => {
    expect(screen.getByText('is this a test?')).toBeDefined()
  })

  test('should on close be call when cancel', () => {
    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)
    expect(onCancelMock).toHaveBeenCalled()
  })

  test('should on confirm be call when confirm', () => {
    const okButton = screen.getByText('Ok')
    fireEvent.click(okButton)
    expect(onConfirmMock).toHaveBeenCalled()
  })
})
