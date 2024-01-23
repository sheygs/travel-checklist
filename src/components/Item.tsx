const Item = ({
        id,
        quantity,
        description,
        packed,
}: {
        id: number;
        description: string;
        quantity: number;
        packed: boolean;
}): JSX.Element => {
        return (
                <li>
                        <input
                                aria-label="checkbox"
                                type="checkbox"
                                value={'checked'}
                                onChange={() => console.log(id)}
                        />
                        <span className={packed ? 'packed' : ''}>
                                {quantity} {description}
                        </span>
                        ❌
                </li>
        );
};

export default Item;
