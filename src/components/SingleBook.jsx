
import { Badge, Button, Col, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router';
import { useTheme } from '../context/contextTheme';


function SingleBook({book}){
 const {theme,colorText}= useTheme();





    return ( 
      
     <Col  sm={6} md={6} lg={4} xl={2} xxl={2} className='my-4'>
             <Card className={`${theme==='dark' ? 'bg-dark':'bg-light'}  h-100 ' `}>
             <Card.Img  variant="top" src={book.img} style={{ height:'400px', width:'100%', objectFit:'cover'}}/>
             <Card.Body>
             <Card.Title className={colorText} >{book.title}</Card.Title>
             <div>
             <Card.Text  >
              <Badge>Price: {book.price}</Badge>
             </Card.Text>
             <Link to={"/books/" + book.asin} ><Button className='bg bg-primary' > Dettagli </Button></Link> 
             </div>
             </Card.Body>
             </Card>
           </Col>
           
          
          
    ) 
  }
    
    
export default SingleBook