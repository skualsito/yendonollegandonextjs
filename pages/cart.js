import { useSelector, useDispatch } from 'react-redux';
export default function Search() {
  const cart = useSelector((state) => state.cart);

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();
  console.log(cart);
  let precio = 0;
  return (
    <div style={{"width": "100%"}}>
      {cart.map((item) => (
        <div style={{"display": "flex", "justify-content": "space-between"}}>
          <h5 style={{"display": "flex", "flex-direction": "column"}}>
            {item.id}
            <small style={{"opacity": ".7", "font-weight": "500"}}>{item.item.descripcion}</small>
            <small style={{"opacity": ".7", "font-weight": "500"}}>$ {item.item.precios[0]}</small>
          </h5>
          
          <p style={{"align-self": "center"}}>{item.quantity}</p>
        </div>
      ))}
      <div style={{"display": "flex", "justify-content": "space-between"}}>
        <h3>
          Total
        </h3>
        <h4>
          $ {cart.reduce((prev, curr)=>{ return prev + curr.item.precios[0]}, 0)}
        </h4>
      </div>
      
    </div>
  )
}
