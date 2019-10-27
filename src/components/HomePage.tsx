import React, { useRef } from 'react'

import ResetCSS from './ResetCSS'
import MainCSS from './MainCSS'

import Splash from './Splash'

// function getOffsetPercent(el) {
//   const rect = el.getBoundingClientRect()
//   const yDiff = Math.abs(window.innerHeight / 2 - (rect.top + rect.height / 2))
//   const yPercent = Math.min(1, Math.max(0, (rect.height - yDiff) / rect.height))

//   return Math.round(yPercent * 100)
// }

// const useScrollboundAnimation = () => {
//   const playerRef = useRef()

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       const elems = document.querySelectorAll('lottie-player')

//       elems.forEach(el => {
//         el.pause()
//         const container = el.dataset.container
//           ? document.querySelector(el.dataset.container)
//           : el
//         el.seek(`${getOffsetPercent(container)}%`)
//       })
//     })
//   }, [])

//   return playerRef
// }

const HomePage: React.FC<{}> = () => {
  // const playerRef = useScrollboundAnimation()
  const playerRef = useRef()

  return (
    <>
      <ResetCSS />
      <MainCSS />
      <Splash />
      {/*
      <lottie-player
        src="https://assets5.lottiefiles.com/datafiles/dc49lw7cOTLEo6y/data.json"
        background="transparent"
        speed="1"
        style={{ width: '100%' }}
        loop
        autoplay
        ref={playerRef}
      /> */}
    </>
  )
}

export default HomePage
