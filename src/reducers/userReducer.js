import {
	SET_USER_PURCHASES,
	SET_PURCHASE_DETAIL,
	SET_CART_PRODUCTS
} from "../actions/types";

const INITIAL_STATE = {
	cartProducts: [],
	purchases: [],
	purchaseDetail: {
		id: -1,
		price: 0,
		orderNumebr: "",
		orderDate: null,
		creditCard: "",
		user: {
			name: "",
			shippingAddress: ""
		}
	}
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_CART_PRODUCTS:
			return {
				...state,
				cartProducts: action.payload
			};

		case SET_USER_PURCHASES:
			return {
				...state,
				purchases: action.payload
			};

		case SET_PURCHASE_DETAIL:
			let purchaseDetail;
			state.purchases.map(purchase => {
				if (purchase.id == action.payload) {
					purchaseDetail = purchase;
				}
			});
			return {
				...state,
				purchaseDetail
			};
		default:
			return state;
	}
}
