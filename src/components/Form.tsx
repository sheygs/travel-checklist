import { FormEvent, useState } from 'react';
import { TravelItem } from '../constants/items';

interface Props {
        onAddItem: (item: TravelItem) => void;
}

const Form = ({ onAddItem }: Props): JSX.Element => {
        const optionValues: number[] = [...new Array(20)].map((_, i: number) => i + 1);

        const [quantity, setQuantity] = useState<number>(1);

        const [description, setDescription] = useState<string>('');

        const handleSubmit = (e: FormEvent): void => {
                e.preventDefault();

                if (!quantity || !description) return;

                const item: TravelItem = {
                        id: Math.random(),
                        description,
                        quantity,
                        packed: false,
                };

                onAddItem(item);

                setQuantity(1);
                setDescription('');
        };

        return (
                <form className="add-form" onSubmit={handleSubmit}>
                        <h3>What do you need for your trip ?</h3>
                        <select
                                aria-label="quantity"
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                id="quantity"
                                name="quantity"
                                value={quantity}
                        >
                                {optionValues.map((value: number) => (
                                        <option key={value} value={`${value}`}>
                                                {value}
                                        </option>
                                ))}
                        </select>
                        <input
                                aria-label="description"
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                value={description}
                        />
                        <button type="submit">Add</button>
                </form>
        );
};

export default Form;
