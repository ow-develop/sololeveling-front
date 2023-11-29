import StoryModalLayout, { StoryModalProps } from '~/stories/modal/modal-layout'
import StoryModalHeader from './modal-layout/modal-header'

const DemoModal = ({
  type = 'fadeIn'
}: {
  type?: StoryModalProps['animateType']
}) => {
  return (
    <StoryModalLayout animateType={type}>
      <StoryModalHeader title='TEST' />

      <div style={{ color: '#fff', textAlign: 'center' }}>TEST</div>
    </StoryModalLayout>
  )
}

export default DemoModal
