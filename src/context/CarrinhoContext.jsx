import React, { Children, createContext } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({Children}) => {
    return(
        <CarrinhoContext.Provider>
            {Children}
        </CarrinhoContext.Provider>
    )
}
