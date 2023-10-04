import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useItemsList } from '../hooks/useItemList';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function truncateDescription(description) {
  const words = description.split(' ').slice(0, 15);
  const truncated = words.join(' ');
  if (words.length < description.split(' ').length) {
    return truncated + '...';
  }
  return truncated;
}

function ItemListContainer() {
  const { items } = useItemsList();
  const { category } = useParams();

  if (!Array.isArray(items)) {
    return <p>Cargando...</p>;
  }

  if (items.length === 0) {
    return <p>No hay elementos para mostrar</p>;
  }

  const filteredItems = category
    ? items.filter(item => item.category === category)
    : items;

  return (
    <Container style={{ marginTop: '80px' }}>
      <Row>
        {filteredItems.map((item, index) => (
          <Col key={index} md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateDescription(item.description)}</Card.Text>
                <Button className='button' as={Link} to={`/item/${item.name}`}>Agregar al carro</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemListContainer;
