import React, { useState, useEffect } from 'react';
import { ProductArea } from '../../pages/HomeScreen/styled';
import { ProductIngredients } from '../ProductItem/styled';
import { useDispatch } from 'react-redux';

import {
    Container,
    ProductArea,
    ProductButtons,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductQuantify,
    ProductQtImage,
    ProductQtText,
    ProductPrice
} from './styled';
import { useEffect } from 'react';

export default ({ data, steStatus }) => {
    const dispatch = useDispatch();

    const [qt, setQt] = useState(1);

    useEffect(()=>{
        setQt(1);
    }, [data]);

    const handleCancelButton = () => {
        steStatus(false);
    } 

    const handleMinusQt = () => {
        if(qt > 1) {
            setQt(qt - 1);
        }
    }

    const handlePlusQt = () => {
        setQt(qt + 1);
    }

    const handleAddToCart = () => {
        // juntar as informações
        /// mandar isso pro reducer
        dispatch({
            type: 'ADD_PRODUCT',
            payloas:{data, qt}
        });

        steStatus(false);
    }

    return (
     <Container>
          <ProductArea>
             <ProductPhoto src={data.image} />
             <ProductInfoArea>
                <ProductDetails>
                    <ProductName>{data.name}</ProductName>
                    <ProductIngredients>{data.ingredients}</ProductIngredients>
                </ProductDetails>
                <ProductQuantityArea>
                    <ProductQuantify>
                        <ProductQtImage onClick={handleMinusQt} src="/assets/minus.png" />
                        <ProductQtText>{qt}</ProductQtText>
                        <ProductQtImage onClick={handlePlusQt}  src="/assets/plus.png" />
                    </ProductQuantify>
                    <ProductPrice>
                        R$ {(data.price * qt).toFixed(2)}
                    </ProductPrice>
                </ProductQuantityArea>
             </ProductInfoArea>
          </ProductArea>
          <ProductButtons>
            <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
            <ProductButton onClick={handleAddToCart}>Adicionar ao Carrinho</ProductButton>

          </ProductButtons>
     </Container>
    );
}