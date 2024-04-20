import { TravelItem } from '../constants';

export const sortItemsByType = (sortBy: string, items: TravelItem[]): TravelItem[] => {
        let sortedItems: TravelItem[] | undefined;

        switch (sortBy) {
                case '0':
                        // sort by input order
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
                        // sort by input order
                        sortedItems = items;
                        break;
        }

        return sortedItems;
};
