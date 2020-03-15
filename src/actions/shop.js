import { SET_NAVBAR_LINKS, SET_SHOP_PRODUCTS } from "./types";

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
				title: "JavaScript"
			},
			{
				id: 2,
				title: "UX/UI"
			},
			{
				id: 3,
				title: "Data-Management"
			},
			{
				id: 4,
				title: "Abstract Concepts for Junior Devs"
			}
		]
	};
}
export function fetchShopProducts() {
	return {
		type: SET_SHOP_PRODUCTS,
		payload: [
			{
				id: 0,
				title: "JavaScript in the browser",
				description:
					"Learn all there is to know about JavaScripts powerful V8 engine",
				price: 12.99,
				belongsTo: [0, 1]
			},
			{
				id: 1,
				title: "Graph Databases",
				description: "Learn How to work with Graph Databases Online",
				price: 9.99,
				belongsTo: [0, 3]
			},
			{
				id: 2,
				title: "Full Stack Development",
				description: "The in's-and-out's of full stack development",
				price: 15.99,
				belongsTo: [0, 4, 1]
			},
			{
				id: 3,
				title: "Data Structures Course",
				description: "What you need to know about data-structures",
				price: 20.0,
				belongsTo: [0, 3]
			},
			{
				id: 4,
				title: "Job preperation pointers",
				description:
					"In a highly competetive market, these are tips youl'll be glad you had",
				price: 5.0,
				belongsTo: [0, 4]
			},
			{
				id: 5,
				title: "Adavanced Object Oriented Programming Course",
				description: "High-Level break down of OOP",
				price: 18.99,
				belongsTo: [0, 1]
			},
			{
				id: 6,
				title: "User Experience Design",
				description: "UX 101",
				price: 18.99,
				belongsTo: [0, 2]
			},
			{
				id: 7,
				title: "User interface design",
				description: "How to create a dynamic user interface",
				price: 14.99,
				belongsTo: [0, 2]
			},
			{
				id: 8,
				title: "Uniform Modeling Language",
				description: "An in depth look at how to structure your application",
				price: 6.99,
				belongsTo: [0, 4]
			}
		]
	};
}
