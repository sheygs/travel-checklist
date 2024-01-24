import { TravelItem } from '../constants/items';

export const sortItemsByType = (sortBy: string, items: TravelItem[]): TravelItem[] => {
        let sortedItems: TravelItem[] = [];
        switch (sortBy) {
                case '0':
                        // sortby Input order
                        sortedItems = items;
                        break;
                case '1':
                        // sort by description
                        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
                        sortedItems = [...items].sort((a, b) =>
                                a.description.localeCompare(b.description)
                        );
                        break;
                case '2':
                        // sort by packed status
                        sortedItems = [...items].sort(
                                (a, b) => Number(a.packed) - Number(b.packed)
                        );
                        break;
                default:
                        // sortby Input order
                        sortedItems = items;
                        break;
        }

        return sortedItems;
};
