import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT,
} from './types'

export function setPurchaseDetail(id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: id,
  }
}

export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product,
  }
}

export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        id: 0,
        product: {
          id: 0,
          title: 'JavaScript in the browser',
          description:
            'Learn all there is to know about JavaScripts powerful V8 engine',
          price: 12.99,
          belongsTo: [0, 1],
        },
        quantity: 2,
      },
      {
        id: 1,
        product: {
          id: 1,
          title: 'Graph Databases',
          description: 'Learn How to work with Graph Databases Online',
          price: 9.99,
          belongsTo: [0, 3],
        },
        quantity: 1,
      },
    ],
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
        orderNumber: 'ALCKNSA0I',
        orderDate: new Date().toDateString(),
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
        orderNumber: 'ADKCDS079',
        orderDate: new Date().toDateString(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Christian Sheen',
          shippingAddress: 'Rodeo Blvd 65th st',
        },
      },
      {
        id: 2,
        title: 'Purchase 3',
        price: 76.2,
        orderNumber: '9DSCS9C89',
        orderDate: new Date().toDateString(),
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
        orderNumber: 'BFGF79797',
        orderDate: new Date().toDateString(),
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
        orderNumber: 'BGFG08889',
        orderDate: new Date().toDateString(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Bernie Madoff',
          shippingAddress: '97th ave 182st',
        },
      },
      {
        id: 5,
        title: 'Purchase 6',
        price: 12.75,
        orderNumber: 'OIUOE8787',
        orderDate: new Date().toDateString(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Jason Calacnis',
          shippingAddress: 'NE Whales Stree, Miami, Fl',
        },
      },
      {
        id: 6,
        title: 'Purchase 7',
        price: 20.16,
        orderNumber: 'QOWIUE767',
        orderDate: new Date().toDateString(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Larry Page',
          shippingAddress: '500 North Bloulevard street',
        },
      },
      {
        id: 7,
        title: 'Purchase 8',
        price: 97.55,
        orderNumber: '867KLJNNO',
        orderDate: new Date().toDateString(),
        creditCard: 'xxx-xxxx-0000',
        user: {
          name: 'Henry Ford',
          shippingAddress: 'George Washington Ave',
        },
      },
    ],
  }
}
