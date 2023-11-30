import React from 'react';
import Container from 'components/Container';
import Welcome from 'components/Welcome';

const Home = () => {
  return (
    <Container height="100vh" $paddingTop="50px">
      <Welcome />
    </Container>
  );
};

export default Home;
