import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import Rating from '../components/Rating';
// import products from '../products';

const ProductScreen = ({ match }) => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get(`/api/products/${match.params.id}`);
			setProduct(data);
			// console.log(product);
		};
		fetchProducts();
	}, [match]);

	return (
		<div>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					{/* <Image src={product.image[0]} alt={product.name} fluid /> */}
				</Col>
				<Col md={6}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>{product.name}</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews (${product.sold} sold)`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>
							Price:
							{product.regularprice === 0 ? (
								''
							) : (
								<del className='pe-3'>${product.regularprice}</del>
							)}
							<strong>${product.price}</strong>
						</ListGroup.Item>
						<ListGroup.Item>
							<Button className='btn-block' type='button'>
								Add To Cart
							</Button>
						</ListGroup.Item>
						<ListGroup.Item>{product.description}</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
};

export default ProductScreen;
