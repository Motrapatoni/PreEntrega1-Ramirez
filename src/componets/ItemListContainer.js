import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function ItemListContainer() {
	const [ posts, setPosts ] = useState([]);
	const [ showModal, setShowModal ] = useState(false);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				const limitedPosts = response.data.slice(0, 15);
				setPosts(limitedPosts);
			})
			.catch((error) => {
				console.error('Error al obtener los datos:', error);
			});
	}, []);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<Container style={{ marginTop: '80px' }}>
			<Row>
				{posts.map((post) => (
					<Col key={post.id} md={4}>
						<Card className="mb-3">
							<Card.Body>
								<Card.Title>{post.title}</Card.Title>
								<Card.Text>{post.body}</Card.Text>
								<Button variant="primary" onClick={handleOpenModal}>
									Leer Más
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>

			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Detalle</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vitae vel, odit suscipit maiores
					explicabo voluptatum assumenda voluptate culpa mollitia totam quia nostrum reprehenderit magni ipsa
					hic exercitationem blanditiis? Repellendus, fugiat. Nam maxime, voluptatum explicabo similique ipsa
					quod quas, eligendi, eaque magni ex praesentium. Fugit nobis nemo placeat! Enim officiis ipsa
					debitis beatae fugit! Unde optio libero delectus ex modi praesentium impedit cum animi reiciendis
					sed et, dicta possimus! Beatae veniam optio ipsam minima minus sed voluptate doloribus tempora
					temporibus? Iste, quos. Voluptatum exercitationem porro earum quis, ex pariatur repellat corporis
					autem odio dolorem veniam, cum soluta laudantium assumenda repellendus?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
}

export default ItemListContainer;
