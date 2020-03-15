import {
	SET_NAVBAR_LINKS
	// SET_SHOP_CATEGORIES
} from "./types";

export function fetchShopCategories() {
	return {
		type: SET_NAVBAR_LINKS,
		payload: [
			{
				id: 0,
				title: "All"
			},
			{
				id: 1,
				title: "Meet the Qmmunity"
			},
			{
				id: 2,
				title: "Services"
			},
			{
				id: 3,
				title: "Rooms for Rent"
			},
			{
				id: 4,
				title: "Baby-sitters"
			}
		]
	};
}
