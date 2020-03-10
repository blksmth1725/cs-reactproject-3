import { SET_USER_PURCHASES } from './types'

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        id: 0,
        title: 'Purchase 1',
        price: 12.65,
      },
      {
        id: 1,
        title: 'Purchase 2',
        price: 16.02,
      },
      {
        id: 2,
        title: 'Purchase 3',
        price: 76.2,
      },
      {
        id: 3,
        title: 'Purchase 4',
        price: 45.0,
      },
      {
        id: 4,
        title: 'Purchase 5',
        price: 93.5,
      },
      {
        id: 5,
        title: 'Purchase 6',
        price: 55.55,
      },
    ],
  }
}
