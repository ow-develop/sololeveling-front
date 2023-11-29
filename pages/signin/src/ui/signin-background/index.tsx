import React from 'react'
import { SignInBottomImgBox, SignInImgUnit } from './style'
import useBreakpoint from '~/hooks/useBreakpoint'
import SignInBgPc from '~/assets/image/background/bg_sign_pc.webp'
import SignInBgM from '~/assets/image/background/bg_sign_m.webp'
import BottomImg from '~/assets/image/background/bg_bottom.webp'

const SignInBackground = () => {
  const { belowSmallWidth } = useBreakpoint()

  return (
    <>
      <SignInImgUnit
        src={belowSmallWidth ? SignInBgM.src : SignInBgPc.src}
        alt='sign in bg'
      />
      <SignInBottomImgBox>
        <img src={BottomImg.src} alt='sign in smoke bg' />
      </SignInBottomImgBox>
    </>
  )
}

export default SignInBackground
