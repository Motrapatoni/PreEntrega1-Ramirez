import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { ItemDetailContainer } from './ItemDetailContainer'
import { useItemsList } from '../hooks/useItemList';

function ItemListContainer() {
	const [ items ] = useItemsList([]);

	return (
		<Container style={{ marginTop: '80px' }}>
			<Row>
				{items.map((item) => (
					<Col key={item.id} md={4}>
						<Card className="mb-3">
							<Card.Body>
								<Card.Title>{item.title}</Card.Title>
								<Card.Text>{item.body}</Card.Text>
								<Button variant="primary" onClick={ItemDetailContainer}>
									Leer Más
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default ItemListContainer;
