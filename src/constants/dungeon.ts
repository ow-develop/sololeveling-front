import { GatePercentage, SlotState } from '~/types/dungeon'
import GateEImage from '~/assets/image/dungeon/gate_reward_e.webp'
import GateDImage from '~/assets/image/dungeon/gate_reward_d.webp'
import GateCImage from '~/assets/image/dungeon/gate_reward_c.webp'
import GateBImage from '~/assets/image/dungeon/gate_reward_b.webp'
import GateAImage from '~/assets/image/dungeon/gate_reward_a.webp'
import GateSImage from '~/assets/image/dungeon/gate_reward_s.webp'

export enum Stone {
  E,
  D,
  C,
  B,
  A,
  S,
  Broken
}

export enum GateRandomCount {
  E = 4,
  D = 8,
  C = 13,
  B = 19,
  A = 26,
  S = 34
}

export const defaultStatusList: SlotState[] = [
  'disabled_e',
  'disabled_c',
  'disabled_a',
  'disabled_s'
]

export const gateRewardImgSet = {
  E: GateEImage.src,
  D: GateDImage.src,
  C: GateCImage.src,
  B: GateBImage.src,
  A: GateAImage.src,
  S: GateSImage.src
}

export const gateRewardList: GatePercentage[] = [
  {
    rank: 'E',
    totalAmount: 4,
    monster: {
      S: {
        amount: 0
      },
      A: {
        amount: 0
      },
      B: {
        amount: 0
      },
      C: { amount: 0 },
      D: { amount: 0 },
      E: { amount: 3 }
    },
    seasonPackAmount: { amount: 1 }
  },
  {
    rank: 'D',
    totalAmount: 8,
    monster: {
      S: {
        amount: 0
      },
      A: {
        amount: 0
      },
      B: {
        amount: 0
      },
      C: { amount: 0 },
      D: { amount: 2 },
      E: { amount: 4 }
    },
    seasonPackAmount: { amount: 2 }
  },
  {
    rank: 'C',
    totalAmount: 13,
    monster: {
      S: {
        amount: 0
      },
      A: {
        amount: 0
      },
      B: {
        amount: 0
      },
      C: { amount: 2 },
      D: { amount: 3 },
      E: { amount: 5 }
    },
    seasonPackAmount: { amount: 3 }
  },
  {
    rank: 'B',
    totalAmount: 19,
    monster: {
      S: {
        amount: 0
      },
      A: {
        amount: 0
      },
      B: {
        amount: 2
      },
      C: { amount: 3 },
      D: { amount: 4 },
      E: { amount: 6 }
    },
    seasonPackAmount: { amount: 4 }
  },
  {
    rank: 'A',
    totalAmount: 26,
    monster: {
      S: {
        amount: 0
      },
      A: {
        amount: 2
      },
      B: {
        amount: 3
      },
      C: { amount: 4 },
      D: { amount: 5 },
      E: { amount: 7 }
    },
    seasonPackAmount: { amount: 5 }
  },
  {
    rank: 'S',
    totalAmount: 34,
    monster: {
      S: {
        amount: 2
      },
      A: {
        amount: 3
      },
      B: {
        amount: 4
      },
      C: { amount: 5 },
      D: { amount: 6 },
      E: { amount: 8 }
    },
    seasonPackAmount: { amount: 6 }
  }
]
