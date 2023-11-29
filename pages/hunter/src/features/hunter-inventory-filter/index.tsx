import { Button, Checkbox } from '@ow-develop/ow-design-system'
import {
  ButtonBox,
  CheckUnit,
  FilterField,
  FilterTitle,
  InventoryFilterWrapper,
  CountItemUnit
} from './style'
import { useTranslation } from 'react-i18next'
import { FormEventHandler } from 'react'
import { HunterCollectionType, HunterFilterItem } from '~/types/hunter'
import useBreakpoint from '~/hooks/useBreakpoint'

interface Props {
  filterList: HunterFilterItem[]
  filterCountMap?: Record<HunterCollectionType, number>
  checkedFilterList: HunterCollectionType[]
  onChangeFilterCheckbox: FormEventHandler
  handleClickClear: () => void
}
const HunterInventoryFilter = ({
  filterList,
  filterCountMap,
  checkedFilterList,
  onChangeFilterCheckbox,
  handleClickClear
}: Props) => {
  const { t } = useTranslation()

  const { belowMediumWidth } = useBreakpoint()
  return (
    <InventoryFilterWrapper>
      <FilterField>
        <FilterTitle>{t('Collection')}</FilterTitle>
        {filterList.map((item, idx) => {
          return (
            <CheckUnit key={item.value} disabled={!filterCountMap[item.value]}>
              <Checkbox
                onChange={(e) => {
                  if (filterCountMap[item.value]) {
                    onChangeFilterCheckbox(e)
                  }
                }}
                id={item.value}
                checked={
                  !!checkedFilterList.find(
                    (filterType) => filterType === item.value
                  )
                }
              >
                {t(item.name)}
              </Checkbox>
              <CountItemUnit>{filterCountMap[item.value] || 0}</CountItemUnit>
            </CheckUnit>
          )
        })}
      </FilterField>
      {!belowMediumWidth && (
        <ButtonBox>
          <Button
            onClick={handleClickClear}
            width='fill'
            size='sm'
            variant='secondary'
          >
            {t('Clear')}
          </Button>
        </ButtonBox>
      )}
    </InventoryFilterWrapper>
  )
}
export default HunterInventoryFilter
