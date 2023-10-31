// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function serviceFaker<T>(response: any): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response)
    }, 500)
  })
}
