import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import Config from "../config.json";
let port = PORT.env
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class Home extends React.Component {

  render() {
    let PORT = PORT.env;
    return (
      <>
      <div>
      <>
        {PORT.map((element) =>{

       
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={element.image} />
  <Card.Body>
    <Card.Title>{element.name}</Card.Title>
    <Card.Text>
    {element.price}
    </Card.Text>
    <Button variant="primary">fav</Button>
  </Card.Body>
</Card>

 })}
 </>
      </div>
        <h1>API Fruits</h1>
      </>
    )
  }
}

export default Home;
