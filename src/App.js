import React, { useMemo } from 'react';

import Row from './components/ui/Row';

import Card from './components/Card';
import Table from './components/Table';
import Button from './components/ui/Button';

function App() {
  const [even, setEven] = React.useState(false);
  const pills = useMemo(() => (["tailwind", "coolthings", "here", "new pill", "music", "climbing", "hiking"]), []);

  const handleClick = React.useCallback(() => {
    setEven(e => !e);
  }, [setEven]);

  return (
    <div className="container">
      <Row>
        <Card
          content="When I'm here, I'm also there. This is just some jibberish, so I can see what it looks like on the card..."
          title="Hello World"
          subTitle="Sub Title Here"
          pills={pills}
        />
        <Card
          content="This is Contnet on the second card here. Let's see how this looks"
          title="Second Card"
          subTitle="Again they Rise"
          pills={pills.slice(0, 4)}
        />
        <Card
          content="This is the third, and smallest card content"
          title="Sea Of Theives"
          subTitle="Strikes Back"
          pills={pills.slice(1, 2)}
        />
      </Row>
      <Button onClick={handleClick} btnTxt={even ? "even" : "default"} />
      <Table even={even} />
    </div>
  );
}

export default App;
