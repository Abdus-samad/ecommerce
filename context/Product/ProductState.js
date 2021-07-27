import React, {useReducer} from 'react';
import {FILTER_PRODUCT, GET_PRODUCT} from '../Types';
import ProductContext from './productContext';
import reducer from './productReducer';

const ProductState = (props) => {
	const initialState = {
		products: [
			{
				id: '8737637',
				images: ['/Fruit-2.jpg','/Fruit-2.jpg','/Fruit-2.jpg','/Fruit-2.jpg',],
				name: 'lime',
				price: '15',
				count: '1',
				category: 'Fruits & Vegetables',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
			},
			{
				id: '87377',
				images: ['/Fruit-3.jpg','/Fruit-3.jpg','/Fruit-3.jpg','/Fruit-3.jpg',],
				name: 'Yellow lime',
				price: '15',
				count: '1',
				category: 'Fruits & Vegetables',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
			},
			{
				id: '87337',
				images: ['/Fruit-1.jpg','/Fruit-1.jpg','/Fruit-1.jpg','/Fruit-1.jpg'],
				name: 'Corn',
				price: '15',
				count: '1',
				category: 'Fruits & Vegetables',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
			},
			{
				id: '84737',
				images: ['/Fruit-4.jpg','/Fruit-4.jpg','/Fruit-4.jpg','/Fruit-4.jpg',],
				name: 'Cherry',
				price: '2',
				count: '1',
				category: 'Fruits & Vegetables',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
			},
			{
				id: '84785',
				images: ['/Dairy-1.jpg','/Dairy-1.jpg','/Dairy-1.jpg','/Dairy-1.jpg'],
				name: 'Barney Butter',
				price: '8',
				count: '1',
				category: 'Dairy',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
			},
			{
				id: '9865',
				images: ['/Dairy-2.jpg','/Dairy-2.jpg','/Dairy-2.jpg','/Dairy-2.jpg'],
				name: 'Nature S Tattva Shea Butter',
				price: '9',
				count: '1',
				category: 'Dairy',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
			{
				id: '89085',
				images: ['/Dairy-3.jpg','/Dairy-3.jpg','/Dairy-3.jpg','/Dairy-3.jpg'],
				name: 'Tnuva Salted Butter',
				price: '10',
				count: '1',
				category: 'Dairy',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
			{
				id: '847385',
				images: ['/Dairy-4.jpg', '/Dairy-4.jpg', '/Dairy-4.jpg', '/Dairy-4.jpg'],
				name: 'Tru Nut Powdered Peanut Butter',
				price: '19',
				count: '1',
				category: 'Dairy',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
			{
				id: '8485',
				images: ['/Meat-1.jpg','/Meat-1.jpg','/Meat-1.jpg','/Meat-1.jpg'],
				name: 'Cod Fillet',
				price: '10',
				count: '1',
				category: 'Meat & Fish',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
			{
				id: '94785',
				images: ['/Meat-2.jpg','/Meat-2.jpg','/Meat-2.jpg','/Meat-2.jpg'],
				name: 'SwordFish Fillet',
				price: '7',
				count: '1',
				category: 'Meat & Fish',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
			{
				id: '89385',
				images: ['/Meat-3.jpg', '/Meat-3.jpg', '/Meat-3.jpg', '/Meat-3.jpg'],
				name: 'Signature Salmon',
				price: '17',
				count: '1',
				category: 'Meat & Fish',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
			{
				id: '847985',
				images: ['/Meat-4.jpg', '/Meat-4.jpg', '/Meat-4.jpg', '/Meat-4.jpg'],
				name: 'Chicken Thigh',
				price: '10',
				count: '1',
				category: 'Meat & Fish',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
			{
				id: '80085',
				images: ['/Snack-4.jpg', '/Snack-4.jpg', '/Snack-4.jpg', '/Snack-4.jpg'],
				name: 'Crawford Shortie',
				price: '6',
				count: '1',
				category: 'Snack',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
			{
				id: '856985',
				images: ['/Snack-3.jpg','/Snack-3.jpg','/Snack-3.jpg','/Snack-3.jpg'],
				name: 'Hill mini pack mix',
				price: '10',
				count: '1',
				category: 'Snack',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
			{
				id: '86545',
				images: ['/Snack-2.jpg','/Snack-2.jpg','/Snack-2.jpg','/Snack-2.jpg'],
				name: 'Crawford Digestives',
				price: '12',
				count: '1',
				category: 'Snack',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
			{
				id: '81985',
				images: ['/Snack-1.jpg', '/Snack-1.jpg', '/Snack-1.jpg', '/Snack-1.jpg'],
				name: 'Belmont Custard Cream',
				price: '1.4',
				count: '1',
				category: 'Snack',
				detail: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",

			},
		],
		product: null,
		filtered: null,
		loading: true,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const getProduct = (id) => {
		dispatch({
			type: GET_PRODUCT,
			payload: id,
		});
	};

	const filterProduct = (category) => {
		dispatch({
			type: FILTER_PRODUCT,
			payload: category,
		});
	};

	return (
		<ProductContext.Provider
			value={{
				products: state.products,
				filtered: state.filtered,
				loading: state.loading,
				product: state.product,
				filterProduct,
				getProduct,
			}}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductState;
