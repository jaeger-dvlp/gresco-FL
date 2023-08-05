import React from 'react';

export type Item = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

type TAppContet = {
  cartItems: any[];
  isCartActive: boolean;
  setIsCartActive: React.Dispatch<React.SetStateAction<boolean>>;
  setCartItems: React.Dispatch<React.SetStateAction<Item[]>>;
  activateCart: () => void;
  deactivateCart: () => void;
};

const AppContext = React.createContext<TAppContet>({
  cartItems: [],
  isCartActive: false,
  setIsCartActive: () => {},
  setCartItems: () => {},
  activateCart: () => {},
  deactivateCart: () => {},
});

export default function AppWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [cartItems, setCartItems] = React.useState<Item[]>([]);
  const [isCartActive, setIsCartActive] = React.useState(false);

  const activateCart = React.useCallback(() => {
    setIsCartActive(true);
  }, [isCartActive]);

  const deactivateCart = React.useCallback(() => {
    setIsCartActive(false);
  }, [isCartActive]);

  const value = React.useMemo(
    () => ({
      cartItems,
      setCartItems,
      isCartActive,
      activateCart,
      deactivateCart,
      setIsCartActive,
    }),
    [cartItems, isCartActive]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return React.useContext(AppContext);
}
