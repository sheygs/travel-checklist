import Item from './Item';
import { TravelItem } from '../data/items';

interface Props {
        items: TravelItem[];
        onToggleItem: (itemId: number) => void;
}

const ListItem = ({ items, onToggleItem }: Props): JSX.Element => {
        return (
                <div className="list">
                        <ul>
                                {items.map((item: TravelItem) => (
                                        <Item
                                                key={item.id}
                                                item={item}
                                                onToggleItem={onToggleItem}
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
                                <button
                                        type="button"
                                        onClick={() => console.log('handleClearList')}
                                >
                                        Clear List
                                </button>
                        </div>
                </div>
        );
};

export default ListItem;
