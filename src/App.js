import React, { useMemo } from "react";

import Row from "./components/ui/Row";

import Card from "./components/Card";
import Nav from "./components/Nav";
import Table from "./components/Table";
import Offline from "./components/Offline";

import useOnline from "./hooks/useOnline";

function App() {
    const pills = useMemo(
        () => ["tailwind", "music", "climbing", "hiking"],
        [],
    );

    const online = useOnline();

    if (!online) {
        return <Offline />;
    }

    return (
        <>
            <Nav />
            <div className="container pt-70">
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
                <Table isList />
            </div>
        </>
    );
}

export default App;
