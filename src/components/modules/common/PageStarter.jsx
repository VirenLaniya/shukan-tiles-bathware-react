import React from 'react'
import PageStarterSection from './PageStarterSection'

const PageStarter = ({background, title}) => {
  return (
    <PageStarterSection bgImage={background} title={title}></PageStarterSection>
  )
}

export default PageStarter