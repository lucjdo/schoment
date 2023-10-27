export type MenuItem = {
  label: string
  icon: JSX.Element
  path: string
}

export interface MenuProps {
  appName: string
  sections: MenuItem[]
}
