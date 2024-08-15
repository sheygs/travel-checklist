import { SetStateAction, useState } from 'react';
import { Item } from './Item';
import { TravelItem, sortCategories, SortCategory } from '../constants';
import { sortItemsByType } from '../utils';

interface Props {
  items: TravelItem[];
  onToggleItem: (itemId: number) => void;
  onDeleteItem: (itemId: number) => void;
  onClearItems: () => void;
}

export const ListItem = ({
  items,
  onToggleItem,
  onDeleteItem,
  onClearItems,
}: Props): JSX.Element => {
  const [sortBy, setSortBy] = useState<string>('0');

  const isDisabled: boolean = items.length < 1;

  const handleSortBy = (e: { target: { value: SetStateAction<string> } }): void => {
    setSortBy(e.target.value);
  };

  const sortedItems = sortItemsByType(sortBy, items);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item: TravelItem) => (
          <Item
            key={item.id}
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select aria-label="sortBy" value={sortBy} onChange={handleSortBy}>
          {sortCategories.map(
            ({ value, description }: SortCategory, index: number) => (
              <option key={index + 1} value={value}>
                {' '}
                {description}
              </option>
            ),
          )}
        </select>
        <button
          className={isDisabled ? 'disable' : ''}
          disabled={isDisabled}
          type="button"
          onClick={onClearItems}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};
