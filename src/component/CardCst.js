import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCst({article}) {
 
   
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={article.image} />
    <Card.Body>
      <Card.Title>{article.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary" >Go somewhere</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default CardCst
