import React, { useMemo } from "react";

import Button from "./components/ui/Button";
import Row from "./components/ui/Row";

import Card from "./components/Card";
import Nav from "./components/Nav";
import Table from "./components/Table";

function App() {
    const [even, setEven] = React.useState(false);
    const pills = useMemo(
        () => ["tailwind", "music", "climbing", "hiking"],
        [],
    );

    const handleClick = React.useCallback(() => {
        setEven((e) => !e);
    }, [setEven]);

    return (
        <>
            <Nav />
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
                        pills={pills.slice(2, 4)}
                    />
                    <Card
                        content="This is the third, and smallest card content"
                        title="Sea Of Theives"
                        subTitle="Strikes Back"
                        pills={pills.slice(1, 2)}
                    />
                </Row>
                <Button
                    onClick={handleClick}
                    btnTxt={even ? "even" : "default"}
                />
                <Table even={even} />
            </div>
        </>
    );
}

export default App;
