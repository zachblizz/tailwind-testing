import React from 'react';

import Row from './components/ui/Row';

import Card from './components/Card';
import Table from './components/Table';
import Button from './components/ui/Button';

function App() {
  const [even, setEven] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setEven(e => !e);
  }, [setEven]);

  return (
    <div className="container">
      <Row>
        <Card />
        <Card />
        <Card />
      </Row>
      <Button onClick={handleClick} btnTxt={even ? "even" : "default"} />
      <Table even={even} />
    </div>
  );
}

export default App;
