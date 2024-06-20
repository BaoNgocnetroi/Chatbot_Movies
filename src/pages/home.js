// src/pages/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Danh sách các phim đang chiếu</h2>
          {/* Hiển thị danh sách phim */}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
