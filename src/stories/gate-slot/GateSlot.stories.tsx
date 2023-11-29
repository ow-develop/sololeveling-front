import SlotMount from '~/stories/gate-slot/SlotMount'
import Layout from '~/stories/Layout'
import useSkeleton from '~/stories/hooks/useSkeleton'
import GateSlotSkeleton from '../../../pages/dungeon/src/features/gate-slot/gate-slot-skeleton'
import SlotOpen from '~/stories/gate-slot/SlotOpen'
import Timer from '~/stories/gate-slot/Timer'

export default {
  title: 'demo/Dungeon Gate'
}

export const Mount = () => {
  return <SlotMount />
}

export const MountPage = () => {
  const { loading } = useSkeleton()

  return (
    <Layout
      title={'Dungeon'}
      description={'Enter gate and clear to earn Monsters.'}
    >
      {!loading ? <GateSlotSkeleton /> : <SlotMount />}
    </Layout>
  )
}

export const GateOpen = () => {
  return (
    <Layout
      title={'Dungeon'}
      description={'Enter gate and clear to earn Monsters.'}
    >
      <SlotOpen />
    </Layout>
  )
}

export const GateTimer = () => {
  return (
    <Layout
      title={'Dungeon'}
      description={'Enter gate and clear to earn Monsters.'}
    >
      <div style={{ display: 'flex', gap: '16px' }}>
        <Timer remainBlock={5} />
        <Timer remainBlock={200} />
        <Timer remainBlock={3000} />
        <Timer remainBlock={100000} />
      </div>
    </Layout>
  )
}
