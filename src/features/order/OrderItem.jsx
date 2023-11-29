function OrderItem({ item }) {
  const { quantity, name, id, totalPrice } = item;
  return (
    <li>
      <OrderItemSP quantity={quantity} name={name} />
      <div>
        <p>{totalPrice}</p>
      </div>
    </li>
  );
}

function OrderItemSP({ quantity, name }) {
  return (
    <p>
      <span>{quantity}&times;</span> {name}
    </p>
  );
}

export default OrderItem;
