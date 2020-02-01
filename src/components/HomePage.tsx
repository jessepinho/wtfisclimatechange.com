import React from 'react'

import ResetCSS from './ResetCSS'
import MainCSS from './MainCSS'

import Intro from './Intro'
import MobileNotice from './MobileNotice'
import Splash from './Splash'
import TemperatureOverTime from './TemperatureOverTime'
import TOC from './TOC'

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <ResetCSS />
      <MainCSS />

      <MobileNotice />
      <Splash />
      <Intro />
      <TOC />
      <TemperatureOverTime />
    </>
  )
}

export default HomePage
