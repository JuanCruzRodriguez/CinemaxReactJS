import Item from "./Item";

const ItemList = ({productos}) => {
    console.log(productos, "sjadjad");
    return (
        <>
        {productos.map((product) => (
            <Item key={product.id} {...product} />
        ))
        }
        </>
    );
}

export default ItemList;
