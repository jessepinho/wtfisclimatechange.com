import React from 'react'

import ResetCSS from './ResetCSS'
import MainCSS from './MainCSS'

import Intro from './Intro'
import Splash from './Splash'

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <ResetCSS />
      <MainCSS />
      <Splash />
      <Intro />
    </>
  )
}

export default HomePage
