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
  addProductToCart: (item: Item) => void;
  clearCart: () => void;
  activateCart: () => void;
  deactivateCart: () => void;
};

const AppContext = React.createContext<TAppContet>({
  cartItems: [],
  isCartActive: false,
  addProductToCart: () => {},
  clearCart: () => {},
  activateCart: () => {},
  deactivateCart: () => {},
});

function SetLocalStorageCartItems(cartItems: Item[]) {
  localStorage.setItem('gresco-cart', JSON.stringify(cartItems));
}

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

  const addProductToCart = React.useCallback(
    (item: Item) => {
      const allItems = [...cartItems];

      const itemIndex = allItems.findIndex((i) => i.id === item.id);

      if (itemIndex === -1) {
        allItems.push(item);
      } else {
        allItems[itemIndex].quantity += item.quantity;
      }

      setCartItems(allItems);
      SetLocalStorageCartItems(allItems);
    },
    [cartItems]
  );

  React.useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem('gresco-cart');

    if (cartItemsFromLocalStorage) {
      setCartItems(JSON.parse(cartItemsFromLocalStorage));
    }
  }, []);

  const clearCart = React.useCallback(() => {
    setCartItems([]);
    SetLocalStorageCartItems([]);
  }, []);

  const value = React.useMemo(
    () => ({
      cartItems,
      isCartActive,
      activateCart,
      deactivateCart,
      addProductToCart,
      clearCart,
    }),
    [cartItems, isCartActive]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return React.useContext(AppContext);
}
