import useSwiper from '~/hooks/useSwiper'
import { HunterRank } from '~/constants/hunter'
import { Button } from '@ow-develop/ow-design-system'
import {
  ActionTextBox,
  ContentField,
  ContentSwiper,
  ExpandInfoItemSubValueUnit,
  ExpandInfoItemValueUnit,
  GateEnterContentWrapper,
  GateExpandActionWrapper,
  MultiValueBox,
  PagingButtonUnit,
  SlideContentBox,
  SlideContentField,
  SlideContentItemBox,
  SlideContentItemMultiValueBox,
  SlideContentItemTitleUnit,
  SlideContentItemValueBox,
  SlideTitleUnit
} from '../../../pages/dungeon/src/features/gate-enter-content/style'
import SvgIcon from '~/common/svg-icon'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ErrorOutlineIcon
} from '@ow-develop/ow-icons/react/material'
import { gateInfoList } from '../../../pages/dungeon/src/features/gate-enter-content/data'
import { SwiperSlide } from 'swiper/react'
import { convertTimeToString } from '~/utils/formatDate'

const DummyGateEnterContent = () => {
  const { defaultOptions, onPrev, onNext } = useSwiper(HunterRank['B'])

  return (
    <GateEnterContentWrapper>
      <PagingButtonUnit align='left' variant='text' onClick={onPrev}>
        <SvgIcon size={40} icon={<ArrowLeftIcon />} color='icon-on-accent' />
      </PagingButtonUnit>

      <ContentSwiper {...defaultOptions}>
        <SlideContentBox>
          {gateInfoList.map(
            ({
              rankName,
              block,
              needKeyCount,
              monsterAmount,
              seasonPackAmount
            }) => {
              return (
                <SwiperSlide key={rankName}>
                  <ContentField>
                    <SlideTitleUnit>{`${rankName}-Rank Gate`}</SlideTitleUnit>

                    <SlideContentField>
                      <SlideContentItemBox>
                        <SlideContentItemTitleUnit>
                          {'Gate reward'}
                          <SvgIcon
                            icon={<ErrorOutlineIcon />}
                            size={13}
                            color='white-70'
                          />
                        </SlideContentItemTitleUnit>

                        <SlideContentItemMultiValueBox>
                          <MultiValueBox>
                            <ExpandInfoItemValueUnit>
                              {monsterAmount}
                            </ExpandInfoItemValueUnit>
                            <ExpandInfoItemSubValueUnit>
                              {'Monster'}
                            </ExpandInfoItemSubValueUnit>
                          </MultiValueBox>

                          <MultiValueBox>
                            <ExpandInfoItemValueUnit>
                              {seasonPackAmount}
                            </ExpandInfoItemValueUnit>
                            <ExpandInfoItemSubValueUnit>
                              {'Season Pack'}
                            </ExpandInfoItemSubValueUnit>
                          </MultiValueBox>
                        </SlideContentItemMultiValueBox>
                      </SlideContentItemBox>

                      <SlideContentItemBox>
                        <SlideContentItemTitleUnit>
                          {'Gate clear time'}
                        </SlideContentItemTitleUnit>
                        <SlideContentItemValueBox>
                          <ExpandInfoItemValueUnit>
                            {`${block.toLocaleString()} ${'Block'}`}
                          </ExpandInfoItemValueUnit>
                          <ExpandInfoItemSubValueUnit>
                            {`≈ ${convertTimeToString(block * 2.5)}`}
                          </ExpandInfoItemSubValueUnit>
                        </SlideContentItemValueBox>
                      </SlideContentItemBox>

                      <SlideContentItemBox>
                        <SlideContentItemTitleUnit>
                          {'Require Gate key'}
                        </SlideContentItemTitleUnit>
                        <SlideContentItemValueBox>
                          <ExpandInfoItemValueUnit>
                            {needKeyCount}
                          </ExpandInfoItemValueUnit>
                          <ExpandInfoItemSubValueUnit>
                            {'Owned amount'} : {11}
                          </ExpandInfoItemSubValueUnit>
                        </SlideContentItemValueBox>
                      </SlideContentItemBox>
                    </SlideContentField>

                    <GateExpandActionWrapper>
                      <ActionTextBox color={'text-weaker'}></ActionTextBox>

                      <Button width='fixed' size='sm'>
                        {'Gate Enter'}
                      </Button>
                    </GateExpandActionWrapper>
                  </ContentField>
                </SwiperSlide>
              )
            }
          )}
        </SlideContentBox>
      </ContentSwiper>

      <PagingButtonUnit align='right' variant='text' onClick={onNext}>
        <SvgIcon size={40} icon={<ArrowRightIcon />} color='icon-on-accent' />
      </PagingButtonUnit>
    </GateEnterContentWrapper>
  )
}

export default DummyGateEnterContent
