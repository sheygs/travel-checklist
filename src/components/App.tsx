import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import ListItem from './ListItem';
import Statistics from './Statistic';

import { TravelItem, items as sampleItems } from '../constants/items';

function App() {
        const [items, setItems] = useState<TravelItem[]>(sampleItems);

        const handleAddItem = (item: TravelItem): void => {
                setItems((items: TravelItem[]) => [...items, item]);
        };

        const handleToggleItem = (itemId: number): void => {
                setItems((items: TravelItem[]) =>
                        items.map((item: TravelItem) =>
                                item.id === itemId ? { ...item, packed: !item.packed } : item
                        )
                );
        };

        const handleDeleteItem = (itemId: number): void => {
                setItems((items: TravelItem[]) =>
                        items.filter((item: TravelItem) => item.id !== itemId)
                );
        };

        const handleClearList = (): void => {
                const result = window.confirm('Are you sure you want to clear all items ?');

                if (!result) return;

                setItems([]);
        };

        return (
                <>
                        <Header />
                        <Form onAddItem={handleAddItem} />
                        <ListItem
                                items={items}
                                onToggleItem={handleToggleItem}
                                onDeleteItem={handleDeleteItem}
                                onClearItems={handleClearList}
                        />
                        <Statistics items={items} />
                </>
        );
}

export default App;
