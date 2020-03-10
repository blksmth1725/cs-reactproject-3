import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from './types'

export function setPurchaseDetail(id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: id,
  }
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        id: 0,
        title: 'Purchase 1',
        price: 12.65,
        orderNumebr: 'ALCKNSA0I',
        orderDate: new Date(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Lindsey Mikolaicik',
          shippingAddress: '900 Souther Border 5',
        },
      },
      {
        id: 1,
        title: 'Purchase 2',
        price: 16.02,
        orderNumebr: 'ADKCDS079',
        orderDate: new Date(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'CHristian Sheen',
          shippingAddress: 'Rodeo Blvd 65th st',
        },
      },
      {
        id: 2,
        title: 'Purchase 3',
        price: 76.2,
        orderNumebr: '9DSCS9C89',
        orderDate: new Date(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Kara Swish',
          shippingAddress: 'Black Hawk avenue, NY, NY',
        },
      },
      {
        id: 3,
        title: 'Purchase 4',
        price: 45.0,
        orderNumebr: 'BFGF79797',
        orderDate: new Date(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Mark Cuban',
          shippingAddress: 'Sonesta Drive NE 135th st',
        },
      },
      {
        id: 4,
        title: 'Purchase 5',
        price: 93.5,
        orderNumebr: 'BGFG08889',
        orderDate: new Date(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Bernie Madoff',
          shippingAddress: '97th ave 182st',
        },
      },
      {
        id: 5,
        title: 'Purchase 6',
        price: 55.55,
        orderNumebr: 'OIUOE8787',
        orderDate: new Date(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Jason Calacnis',
          shippingAddress: 'NE Whales Stree, Miami, Fl',
        },
      },
      {
        id: 6,
        title: 'Purchase 7',
        price: 55.55,
        orderNumebr: 'QOWIUE767',
        orderDate: new Date(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Larry Page',
          shippingAddress: '500 North Bloulevard street',
        },
      },
      {
        id: 7,
        title: 'Purchase 8',
        price: 55.55,
        orderNumebr: '867KLJNNO',
        orderDate: new Date(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Henry Ford',
          shippingAddress: 'George Washington Ave corner of Jesus Pinero',
        },
      },
    ],
  }
}
