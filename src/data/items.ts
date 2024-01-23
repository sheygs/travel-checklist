export interface TravelItem {
        id: number;
        description: string;
        quantity: number;
        packed: boolean;
}

export const items: TravelItem[] = [
        { id: 1, description: 'Passports', quantity: 2, packed: true },
        { id: 2, description: 'Socks', quantity: 12, packed: false },
        { id: 3, description: 'Bed Sheet', quantity: 7, packed: true },
        { id: 4, description: 'Lamp', quantity: 1, packed: false },
];
