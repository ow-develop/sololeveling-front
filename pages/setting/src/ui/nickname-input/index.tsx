import {
  CancelIcon,
  NavigationCheckIcon,
  NavigationCloseIcon
} from '@ow-develop/ow-icons/react/material'
import React, {
  ChangeEvent,
  forwardRef,
  HTMLAttributes,
  useRef,
  useState
} from 'react'
import { FieldErrors } from 'react-hook-form/dist/types/errors'
import { HelperTextField, InputField, InputUnit, InputWrapper } from './style'
import SvgIcon from '~/common/svg-icon'
import { useI18next } from '~/lib/i18n'
import { checkHunterNameDto, CheckHunterNameReason } from '~/api/dto/hunter'
import { Regex } from '~/constants/form'
import { NICKNAME_BAN_CASE_LIST } from '../../features/profile-setting'

export interface Props extends HTMLAttributes<HTMLInputElement> {
  width?: 'hug' | 'fill' | 'fixed'
  fixedWidth?: number
  placeholder?: string
  onReset?: () => void
  fetchResponse: checkHunterNameDto
  nickname?: string
  isEditing?: boolean
}

export const NicknameBox = forwardRef<HTMLInputElement, Props>(
  (
    {
      onChange,
      onReset,
      width = 'fill',
      fixedWidth,
      fetchResponse,
      nickname = '',
      isEditing,
      ...restProps
    },
    ref
  ) => {
    const { t } = useI18next()
    const inputRef = useRef(null)
    const [inputCount, setInputCount] = useState<number | undefined>()

    const handleResetClick = () => {
      onReset?.()
      if (inputRef.current) {
        inputRef.current.value = ''
      }
      setInputCount(0)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      setInputCount(e.currentTarget.value.length)
    }

    const patternCheck = !Regex.NAME.test(nickname)
    const vanTextCheck = NICKNAME_BAN_CASE_LIST.some((item) =>
      String(nickname).toLowerCase().includes(item)
    )

    const lengthCheck = nickname.length < 4 || nickname.length > 24
    const duplicationCheck =
      fetchResponse?.reason === CheckHunterNameReason.Duplicate

    const handleErrIcon = (status: boolean) => {
      if (status) {
        return (
          <SvgIcon
            icon={<NavigationCloseIcon />}
            size={12}
            color='status-danger-default'
          />
        )
      } else {
        return (
          <SvgIcon
            icon={<NavigationCheckIcon />}
            size={12}
            color='status-success-default'
          />
        )
      }
    }

    return (
      <InputWrapper width={width}>
        <InputField width={width} fixedWidth={fixedWidth}>
          <InputUnit
            {...restProps}
            type='text'
            ref={ref ?? inputRef}
            onChange={handleInputChange}
          />
          {inputCount !== 0 && (
            <SvgIcon
              icon={<CancelIcon />}
              size={24}
              color='icon-weaker'
              onClick={handleResetClick}
            />
          )}
        </InputField>

        {isEditing && (
          <>
            <HelperTextField isErrorStatus={patternCheck}>
              {handleErrIcon(patternCheck)}
              {t(
                'Can only contain English letters, numbers, and underscores(_).'
              )}
            </HelperTextField>
            <HelperTextField isErrorStatus={vanTextCheck}>
              {handleErrIcon(vanTextCheck)}
              {t('Contains words that cannot be used.')}
            </HelperTextField>
            <HelperTextField isErrorStatus={lengthCheck}>
              {handleErrIcon(lengthCheck)}
              {t('Nickname must be between 4 and 24 characters.')}
            </HelperTextField>
            <HelperTextField isErrorStatus={duplicationCheck}>
              {handleErrIcon(duplicationCheck)}
              {t(`Can't use previously registered nickname.`)}
            </HelperTextField>
          </>
        )}
      </InputWrapper>
    )
  }
)
NicknameBox.displayName = 'Input'
