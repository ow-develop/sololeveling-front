import React, { useEffect, useRef, useState } from 'react'
import { useAnimation } from 'framer-motion'
import useIsMounted from '~/hooks/useIsMounted'
import usePreventBodyScroll from '~/hooks/usePreventBodyScroll'
import { AriseEffectBox } from '../../../pages/leveling/arise/src/ui/style'

interface Props {
  video: string
}

const VideoCommon = ({ video }: Props) => {
  const mounted = useIsMounted()
  const videoControls = useAnimation()
  const { initScroll } = usePreventBodyScroll()
  const videoRef = useRef<HTMLVideoElement>()
  const [isPlaying, setIsPlaying] = useState(false)

  const videoVariants = {
    animate: { opacity: 1, transition: { duration: 0 } }
  }

  useEffect(() => {
    if (mounted) {
      initScroll()
      videoRef.current?.play()
    }
  }, [mounted])

  return (
    <AriseEffectBox variants={videoVariants} animate={videoControls}>
      <video
        autoPlay
        playsInline
        muted
        ref={videoRef}
        src={video}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={async () => {
          await videoControls.start('hidden')
          await videoRef.current.pause()
          setIsPlaying(false)
        }}
      />
    </AriseEffectBox>
  )
}

export default VideoCommon
