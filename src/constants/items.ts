export interface SortCategory {
        value: string;
        description: string;
}

export interface TravelItem {
        id: number;
        description: string;
        quantity: number;
        packed: boolean;
}

export const sortCategories: SortCategory[] = [
        {
                value: '0',
                description: 'Sort by Input Order',
        },
        {
                value: '1',
                description: 'Sort by Description',
        },
        {
                value: '2',
                description: 'Sort by Packed Status',
        },
];

export const items: TravelItem[] = [
        { id: 1, description: 'Passports', quantity: 2, packed: false },
        { id: 2, description: 'Socks', quantity: 12, packed: false },
        { id: 3, description: 'Bed Sheet', quantity: 7, packed: false },
        { id: 4, description: 'Lamp', quantity: 1, packed: false },
];
