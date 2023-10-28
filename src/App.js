import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchProducts } from "./actions/ProductsAction";
import { Card, Col, Container,  Row, Spinner } from "react-bootstrap";
import SearchComponent from "./Componenets/SearchComponent";
import PaginationComponent from "./Componenets/PaginationComponent";

const App = () => {
  const dispatch = useDispatch();

  const { loading, products, error,nbpage } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(SearchProducts());
  }, [dispatch]);

  
  return (
    <>
  
      <Container className="App">
        <SearchComponent dispatch={dispatch} />
     <Row xs={1} md={2} className="g-4">
        {loading
          ? <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" />
        </div>
          : (products?.length>0 ? products?.map((el, idx) => (
            <Col key={idx} className="text-center">
              <Card className="mb-4 text-center">
                <Card.Img variant="top" src={el.mainPictureUrl} />
                <Card.Body>
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>{el.description}</Card.Text>
                </Card.Body>
              </Card>
              </Col>
          ))
              :
          <h1>Product Not found</h1>    
          
            )}
          <PaginationComponent nbPage={nbpage} dispatch={dispatch}/> 
      </Row>
      </Container>
    </>
  );
};

export default App;
