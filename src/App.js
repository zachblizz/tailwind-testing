import React from 'react';

import Row from './components/ui/Row';

import Card from './components/Card';
import Table from './components/Table';

function App() {
  return (
    <div className="container">
      <Row>
        <Card />
        <Card />
        <Card />
      </Row>
      <Table />
    </div>
  );
}

export default App;
