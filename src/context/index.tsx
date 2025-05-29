import { createContext, useState } from "react";
import { ProductCardProps } from "../types";

interface ShoppingCartContextProps {
  cartProducts: ProductCardProps[];
  setCartProducts: React.Dispatch<React.SetStateAction<ProductCardProps[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<ProductCardProps[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};