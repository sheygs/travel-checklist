import Item from './Item';
import { TravelItem } from '../data/items';

interface Props {
        items: TravelItem[];
        onToggleItem: (itemId: number) => void;
        onDeleteItem: (itemId: number) => void;
        onClearItems: () => void;
}

const ListItem = ({ items, onToggleItem, onDeleteItem, onClearItems }: Props): JSX.Element => {
        return (
                <div className="list">
                        <ul>
                                {items.map((item: TravelItem) => (
                                        <Item
                                                key={item.id}
                                                item={item}
                                                onToggleItem={onToggleItem}
                                                onDeleteItem={onDeleteItem}
                                        />
                                ))}
                        </ul>
                        <div className="actions">
                                <select
                                        aria-label="sort"
                                        value={''}
                                        onChange={() => console.log('handleSort')}
                                >
                                        <option value="0"> Sort by Input Order</option>
                                        <option value="1"> Sort by Description</option>
                                        <option value="2"> Sort by Packed Status</option>
                                </select>
                                <button type="button" onClick={() => onClearItems()}>
                                        Clear List
                                </button>
                        </div>
                </div>
        );
};

export default ListItem;
