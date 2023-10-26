export type MenuItem = {
  label: string
  icon: JSX.Element
}

export interface MenuProps {
  appName: string
  sections: MenuItem[]
}
