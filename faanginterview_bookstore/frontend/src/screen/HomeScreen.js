import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import axios from 'axios';
import Product from '../components/Product';

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products'); // data = res.data
			setProducts(data);
			// console.log(products); // error here where change data = product => some time undefined so cannt get 1st
		};
		fetchProducts();
	}, []);

	return (
		<div>
			<Row>
				{/* <div>{products[0].name}</div>
				<Image src={products[0].image[0]} rounded fluid /> */}
				<div>
					<h3>INTERVIEW TIPS FROM FAANG INTERVIEWERS</h3>
					<span>System Design Cheatsheet is Available NOW!</span>
				</div>
				<Button variant='outline-dark'>Buy Now</Button>
				<div>
					<br></br>
				</div>

				<div>
					<h2>Real interview tips</h2>
					<span>
						All of the guides are written by senior engineers at FAANG, who have
						conducted interviews and also successfully landed multiple offers at
						all FAANG companies as well as unicorn startups (ie. Uber, Lyft,
						Airbnb, Stripe, Pinterest).
					</span>
					<span>
						This is a great chance to pick their brains on interview processes
						at top companies. The topics can range from which technical topics
						to cover to how to ace behavioral interview.
					</span>
				</div>
				<div>
					<br></br>
				</div>
				<h2>The secret sauce is at your finger tips!</h2>
				{products.map((product) => (
					<Col key={product.id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}

				<div>
					<h2>Testimonial</h2>
				</div>

				<div>
					<h2>Frequently asked questions</h2>
				</div>
			</Row>
		</div>
	);
};

export default HomeScreen;
