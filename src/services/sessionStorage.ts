export function getFromSession(key: string) {
  try {
    const data = sessionStorage.getItem(key)

    if (data !== null) {
      return JSON.parse(data)
    } else {
      return null
    }
  } catch (error) {
    console.error('An error occurred while accessing sessionStorage:', error)
  }
}

export function setInSession(key: string, value: JSON | object) {
  sessionStorage.setItem(key, JSON.stringify(value))
}
