import { useState } from 'react'

import { ViewMore } from '~/common/view-more/index'

export default {
  title: 'common/View More',
  component: ViewMore
}

export const Default = () => {
  const [on, setOn] = useState(false)

  return (
    <ViewMore extend={on} onClick={() => setOn((prev) => !prev)}>
      <div style={{ width: '100%', height: '500px', background: 'red' }}></div>
    </ViewMore>
  )
}
