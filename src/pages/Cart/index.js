import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {

    const cart = useSelector(state => state.cart);

  return (
    <Container>
      {cart.map(product => (
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
            <tr>
              <td>
                <img src={product.image} alt="tenis" />
              </td>

              <td>
                <strong>{product.title}</strong>
                <span>R$ {product.price}</span>
              </td>

              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline color="7159c1" size={20}/>
                  </button>

                  <input type="number" readOnly value={1} />

                  <button type="button">
                    <MdAddCircleOutline color="7159c1" size={20}/>
                  </button>
                </div>
              </td>

              <td>
                <strong>R$ {product.price}</strong>
              </td>

              <td>
                <button type="button">
                  <MdDelete color="7159c1" size={20}/>
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>
        
      ))}  
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL </span>
          <strong>R$129,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
