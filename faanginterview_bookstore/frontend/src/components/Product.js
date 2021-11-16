import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/product/${product.product_id}`}>
				<Card.Img src={product.image[0]} variant='top' />
			</Link>
			<Card.Body>
				<Link to={`/product/${product.product_id}`}>
					<Card.Title as='div'>
						<strong>{product.product_name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='div'>
					<Rating
						value={product.rating}
						text={`${product.numreviews} reviews`}
					/>
				</Card.Text>

				<Card.Text as='div'>
					<div className='my-3'>{product.sold} sold</div>
				</Card.Text>

				<Card.Text as='h3'>
					${product.regular_price}
				</Card.Text>

				<Card.Text as='h3'>
					${product.sale_price}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
