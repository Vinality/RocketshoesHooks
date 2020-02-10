import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';
import { useDispatch, useSelector } from "react-redux";
import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {

  const cart = useSelector(state => state.cart);

  const subTotal = cart.map(product => {
    return (product.price * product.amount).toFixed(2)
  })

  const total = cart.reduce((total, product) => {
    return total + (product.price * product.amount)
  }, 0)

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1))
  } 

  function decrement(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1))
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((product, id) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt="tenis" />
              </td>

              <td>
                <strong>{product.title}</strong>
                <span>R$ {product.price}</span>
              </td>

              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline color="7159c1" size={20}/>
                  </button>

                  <input type="number" readOnly value={product.amount} />

                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline color="7159c1" size={20}/>
                  </button>
                </div>
              </td>

              <td>
                <strong>R$ {subTotal[id]}</strong>
              </td>

              <td>
                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product))}>
                  <MdDelete color="7159c1" size={20}/>
                </button>
              </td>
            </tr>
          ))}  
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL </span>
          <strong>R$ {total.toFixed(2)}</strong>
        </Total>
      </footer>
    </Container>
  );
}
