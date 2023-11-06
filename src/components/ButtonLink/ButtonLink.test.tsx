import ButtonLink from '.'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Button Link', () => {
  beforeEach(() => {
    render(<ButtonLink href='/go-to'>Go to</ButtonLink>)
  })

  test('should render the content', () => {
    expect(screen.getByText('Go to')).toBeDefined()
  })

  test('should navigate on click', () => {
    const link = screen.getByRole('link')
    fireEvent.click(link)
    expect(location.href).toMatch('/go-to')
  })
})
