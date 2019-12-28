import React from 'react'

import ResetCSS from './ResetCSS'
import MainCSS from './MainCSS'

import Intro from './Intro'
import Splash from './Splash'
import TOC from './TOC'

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <ResetCSS />
      <MainCSS />
      <Splash />
      <Intro />
      <TOC />
    </>
  )
}

export default HomePage
