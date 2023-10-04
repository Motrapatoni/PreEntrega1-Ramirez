import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useItemByName } from '../hooks/useItemByName';
import Spinner from 'react-bootstrap/Spinner';

const IMAGE_SIZE = { width: '150px', height: '150px' };
const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmEXMXFKZ2CZKwF4Gm61tXhu15meG9FnD-9KWyX-cWgGyBRCihh3PhCZTpzlxUKlX1ws&usqp=CAU"

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const imageStyles = {
  ...IMAGE_SIZE,
  objectFit: 'cover',
};

export const ItemDetailContainer = () => {
  const { name } = useParams();
  const { item, loading } = useItemByName(name);

  if (loading) {
    return (
      <Container style={{ marginTop: '80px' }}>
        <h1>Cargando...</h1>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (!item) {
    return <h1>No existe el item</h1>;
  }

  const imageUrl = item.image || DEFAULT_IMAGE;

  return (
    <Container style={{ marginTop: '80px' }}>
      <Card style={cardStyles}>
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={item.name}
          style={imageStyles}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Descripción: {item.description}</Card.Text>
          <Card.Text>Precio: {item.price}</Card.Text>
          <Card.Text>Categoria: {item.category}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
