import React, { useRef } from 'react'

interface Props {
  videoSrc: string
}

const VideoItem = ({ videoSrc }: Props) => {
  const videoRef = useRef<HTMLVideoElement>()

  return <video loop autoPlay playsInline muted ref={videoRef} src={videoSrc} />
}

export default VideoItem
