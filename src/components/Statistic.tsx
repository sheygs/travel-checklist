import { TravelItem } from '../constants';

export const Statistics = ({ items }: { items: TravelItem[] }): JSX.Element => {
  const packedItemsCount: number = items?.filter(
    (item: TravelItem) => item.packed,
  )?.length;

  const percentPacked: number = packedItemsCount
    ? Math.round((packedItemsCount / items?.length) * 100)
    : 0;

  return (
    <footer className="stats">
      {!items?.length && <em>Start adding items to your list 🚀</em>}
      {items.length > 0 &&
        (packedItemsCount === 0 ||
          (packedItemsCount > 0 && percentPacked !== 100)) && (
          <em>
            💼 You have {items.length} items on your list, and you already packed{' '}
            {packedItemsCount} ({percentPacked}%)
          </em>
        )}
      {percentPacked === 100 && <em>You got everything! Ready to go ✈️</em>}
    </footer>
  );
};
