import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListItem from './components/ListItem';
import Statistics from './components/Statistic';

import { TravelItem, items as sampleItems } from './data/items';

function App() {
        const [items, setItems] = useState<TravelItem[]>(sampleItems);

        const handleAddItem = (item: TravelItem): void => {
                setItems((items: TravelItem[]) => [...items, item]);
        };

        return (
                <>
                        <Header />
                        <Form onAddItem={handleAddItem} />
                        <ListItem items={items} />
                        <Statistics />
                </>
        );
}

export default App;
