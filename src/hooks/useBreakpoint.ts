import { useDownCustom } from '@ow-develop/ow-design-system'
import { Breakpoint } from '~/constants/style'

const useBreakpoint = () => {
  const belowMinimumWidth = useDownCustom(Breakpoint.MINIMUM)
  const belowSmallWidth = useDownCustom(Breakpoint.S)
  const belowMediumWidth = useDownCustom(Breakpoint.M)
  const belowLargeWidth = useDownCustom(Breakpoint.L)

  return {
    belowMinimumWidth,
    belowSmallWidth,
    belowMediumWidth,
    belowLargeWidth
  }
}
export default useBreakpoint
