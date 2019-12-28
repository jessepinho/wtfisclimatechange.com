import React, { useEffect, useRef } from 'react'
import Sticky from 'react-stickynode'
import { useScrollPercentage } from 'react-scroll-percentage'

import * as Styles from './styles'

const getPercentageWithLoops = (
  scrollWrapperPercentage: number,
  loops: number
): string => `${Math.round(scrollWrapperPercentage * 100 * loops) % 100}%`

const useScrollboundAnimation = (
  /**
   * The number of loops through the animation to play while scrolling through
   * the scroll wrapper. This is useful if your animation is relatively short
   * and thus gets a bit choppy when stretched across a long scroll length. The
   * higher the number of loops, the more smoothly (and quickly) the animation
   * will run.
   */
  loops: number = 1
): [
  React.MutableRefObject<LottiePlayerElement>,
  ((node?: Element | null) => void)
] => {
  const playerRef = useRef<LottiePlayerElement>()

  const [scrollWrapperRef, scrollWrapperPercentage] = useScrollPercentage()

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seek(
        getPercentageWithLoops(scrollWrapperPercentage, loops)
      )
    }
  }, [scrollWrapperPercentage])

  return [playerRef, scrollWrapperRef]
}

interface LottiePlayerElement extends Element {
  seek(percentage: string): void
}

const Intro: React.FC<{}> = () => {
  const [playerRef, scrollWrapperRef] = useScrollboundAnimation(5)

  const [scaleAnimationRef, scaleAnimationPercentage] = useScrollPercentage()
  // `percentage` ends at 0.5, since the scroll reference point is already fully
  // visible on-screen. So we'll account for that when we normalize the
  // percentage.
  const normalizedPercentage = scaleAnimationPercentage * 2

  // Then, we'll give it a multiplier to make it huge at the end.
  const multipliedPercentage = normalizedPercentage * 5

  return (
    <>
      <Styles.Root ref={scrollWrapperRef}>
        <Sticky innerZ={-2} bottomBoundary="#Intro__text-bottom">
          <Styles.FadeToBlue>
            <Styles.AnimationWrapper
              style={{
                opacity: 1 - normalizedPercentage,
              }}
            >
              {/* Don't render the animation when it's no longer on the screen, for performance reasons */}
              {normalizedPercentage < 1 && (
                <lottie-player
                  src="https://assets5.lottiefiles.com/datafiles/dc49lw7cOTLEo6y/data.json"
                  background="transparent"
                  speed="1"
                  style={{
                    width: '100%',
                    transform: `scale(${multipliedPercentage + 1})`,
                  }}
                  ref={playerRef}
                />
              )}
            </Styles.AnimationWrapper>
          </Styles.FadeToBlue>
        </Sticky>

        <Styles.TextWrapper>
          <Styles.P>
            <Styles.Span>
              So you've been reading the news, and you have some questions.
            </Styles.Span>
          </Styles.P>

          <Styles.P>
            <Styles.Span>What do sea level rises mean for my city?</Styles.Span>
          </Styles.P>
          <Styles.P>
            <Styles.Span>
              Is 400 parts per million of carbon in the atmosphere a high
              number?
            </Styles.Span>
          </Styles.P>
          <Styles.P>
            <Styles.Span>
              What does deforestation mean for global warming?
            </Styles.Span>
          </Styles.P>
          <Styles.P>
            <Styles.Span>
              How does it all fit together? What <Styles.Em>is</Styles.Em>{' '}
              climate change?!
            </Styles.Span>
          </Styles.P>

          <Styles.ScrollReferencePoint
            ref={scaleAnimationRef}
            id="Intro__text-bottom"
          />
        </Styles.TextWrapper>
      </Styles.Root>
    </>
  )
}

export default Intro
