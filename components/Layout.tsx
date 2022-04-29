import React, {FC} from 'react'
import { Header } from './'

type Props = {
    children : JSX.Element,
}

const Layout: FC<Props> = ({children}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout