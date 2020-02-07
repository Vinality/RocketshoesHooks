import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import { ProductList } from './styles';

export default function Home() {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('products');
      setProducts(result.data);
    }

    fetchData();
  }, []);

 const handleAddProduct = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      product: product
    })
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>R$ {product.price}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> {cart.length}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}