export const enum SystemIncrease {
  UPGRADE = 3,
  ARISE = 5,
  SMELTING = 5
}

// request max값 fix 필요
export const enum RequestMax {
  ARISE = 10,
  SMELTING = 20
}

export const smeltingRewardList = [
  {
    text: 'E',
    percent: 35
  },
  {
    text: 'D',
    percent: 25
  },
  {
    text: 'C',
    percent: 20
  },
  {
    text: 'B',
    percent: 10
  },
  {
    text: 'A',
    percent: 7
  },
  {
    text: 'S',
    percent: 3
  }
]

export const returnReward = {
  'E-Rank': 5,
  'D-Rank': 15,
  'C-Rank': 40,
  'B-Rank': 90,
  'A-Rank': 190,
  'S-Rank': 380,
  'Shadow-B': 1180,
  'Shadow-A': 6500,
  'Shadow-S': 22500
}
