import { useSelector, useDispatch } from 'react-redux';
export default function Search() {
  const cart = useSelector((state) => state.cart);

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();
  console.log(cart);
  return (
    <div>
      Carrito
      {/* {cart.map((item) => (
        item
      ))} */}
    </div>
  )
}
