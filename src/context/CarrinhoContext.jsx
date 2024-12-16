import React, { Children, createContext } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({Children}) => {
    const [carrinho, setCarrinho] = useState([]);

    return(
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {Children}
        </CarrinhoContext.Provider>
    );
};
