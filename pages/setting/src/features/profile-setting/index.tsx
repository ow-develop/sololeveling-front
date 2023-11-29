import { Button } from '@ow-develop/ow-design-system'
import { debounce } from 'lodash-es'
import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ButtonBox, NicknameEditField, NickNameLayout } from './style'
import useCheckNameQuery from '../../hooks/useCheckNameQuery'
import { useProfileImgMutation } from '../../hooks/useProfileImgMutation'
import useSaveNameMutation from '../../hooks/useSaveNameMutaion'
import ImageInput from '../../ui/image-input'
import { NicknameBox } from '../../ui/nickname-input'
import SettingContentLayout from '../../ui/setting-content-layout'
import Title from '../../ui/title'
import ProfileEditModal from '../profile-edit-modal'
import { Regex } from '~/constants/form'
import { SuccessType } from '~/constants/message'
import useUserQuery from '~/hooks/queries/useUserQuery'
import useModal from '~/hooks/useModal'
import useToastAction from '~/hooks/useToastAction'
import { useI18next } from '~/lib/i18n'
import { getProfileImg } from '~/lib/image'
import { useGetHunterProfileTokenBalanceQuery } from '../../hooks/useGetHunterProfileTokenBalanceQuery'

export const NICKNAME_BAN_CASE_LIST = [
  'otherworld',
  'other_world',
  'sololeveling',
  'official'
]

const ProfileSetting = () => {
  const [selectedImgUrl, setSelectedImgUrl] = useState<string | null>(null)

  const { data: userInfo } = useUserQuery()
  const { mutateAsync: updateProfileImg } = useProfileImgMutation()
  const { mutateAsync: postNickName } = useSaveNameMutation()
  useGetHunterProfileTokenBalanceQuery()

  const { openModal, closeModal } = useModal()
  const { showSuccessToast } = useToastAction()
  const { t } = useI18next()

  const {
    register,
    trigger,
    formState: { isValid, errors: formErr },
    getValues,
    clearErrors,
    setValue,
    getFieldState
  } = useForm<{ nickname: string }>()

  const {
    data: checkHunterName,
    refetch: fetchCheckNickName,
    isRefetching
  } = useCheckNameQuery(getValues()?.nickname)

  const [isEditing, setIsEditing] = useState(false)

  const handleReset = () => {
    setValue('nickname', '')
    trigger('nickname')
  }

  const handleNameCheck = useMemo(
    () =>
      debounce(() => {
        if (getValues()?.nickname && !getFieldState('nickname')?.invalid) {
          fetchCheckNickName()
        }
      }, 1000),
    [fetchCheckNickName, getFieldState, getValues]
  )

  const handleNameInputChange = () => {
    trigger('nickname').then(handleNameCheck)
    setIsEditing(true)
  }

  const onClickSetProfile = (profileImg: string) => {
    if (!profileImg) {
      setSelectedImgUrl(getProfileImg(null))
    } else {
      setSelectedImgUrl(profileImg)
    }

    closeModal()
  }

  const handleClickUpdateImg = () => {
    openModal(<ProfileEditModal onClickSetProfile={onClickSetProfile} />)
  }

  const isNameChanged =
    !!getValues()?.nickname && userInfo?.name !== getValues()?.nickname
  const isProfileChanged =
    selectedImgUrl !== null && userInfo?.profileImgCf !== selectedImgUrl

  const handleTotalSubmit = async () => {
    if (isNameChanged) {
      await postNickName(getValues()?.nickname)
      setIsEditing(false)
    }

    if (isProfileChanged) {
      const isDefaultImg = selectedImgUrl.includes('_next')
      await updateProfileImg(isDefaultImg ? null : selectedImgUrl)
      setSelectedImgUrl(null)
    }

    showSuccessToast(t(SuccessType.PROFILE_CHANGE))
  }

  useEffect(() => {
    if (userInfo?.name) {
      setValue('nickname', userInfo.name)
    }
  }, [setValue, userInfo?.name])

  useEffect(() => {
    if (isNameChanged || isProfileChanged) {
      window.onbeforeunload = () => {
        return true
      }
    }
    return () => {
      window.onbeforeunload = null
    }
  }, [isProfileChanged, isNameChanged])

  useEffect(() => {
    clearErrors()
  }, [clearErrors])

  return (
    <>
      <SettingContentLayout title='Profile Image'>
        <ImageInput
          onClick={handleClickUpdateImg}
          imgUrl={selectedImgUrl || getProfileImg(userInfo)}
        />
      </SettingContentLayout>

      <NickNameLayout title='Nickname'>
        <Title title='Nickname' />
        <NicknameEditField>
          <NicknameBox
            placeholder={userInfo?.name || 'Unknown'}
            onReset={handleReset}
            fetchResponse={checkHunterName}
            nickname={getValues()?.nickname}
            isEditing={isEditing}
            {...register('nickname', {
              onChange: handleNameInputChange,
              minLength: 4,
              maxLength: 24,
              validate: {
                vanText: (value) =>
                  !NICKNAME_BAN_CASE_LIST.some((item) =>
                    String(value).toLowerCase().includes(item)
                  )
              },
              pattern: {
                value: Regex.NAME,
                message: t(
                  'Can only contain English letters, numbers, and underscores(_).'
                )
              }
            })}
          />
        </NicknameEditField>

        <ButtonBox>
          <Button
            width='fill'
            size={'sm'}
            disabled={
              (checkHunterName && !checkHunterName?.isAvailableName) ||
              !isValid ||
              (!isNameChanged && !isProfileChanged)
            }
            loading={isRefetching}
            onClick={handleTotalSubmit}
          >
            {t('Save Settings')}
          </Button>
        </ButtonBox>
      </NickNameLayout>
    </>
  )
}

export default ProfileSetting
