import React from 'react';
import ProductClearImage from '@/public/assets/img/productClear.jpeg';

export const GrescoCoalItem = {
  id: 'GRSCOCOAL01',
  image: ProductClearImage.src,
  name: 'Gresco Doğal Nargile Kömürü',
  price: 89.99,
};

export const AllProducts = [GrescoCoalItem];

export type TItem = {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

type TAppContet = {
  cartItems: any[];
  isCartActive: boolean;
  addProductToCart: (item: Omit<TItem, 'price'>) => void;
  clearCart: () => void;
  activateCart: () => void;
  deactivateCart: () => void;
  getLocalStorageCartItems: () => any[];
};

const AppContext = React.createContext<TAppContet>({
  cartItems: [],
  isCartActive: false,
  addProductToCart: () => {},
  clearCart: () => {},
  activateCart: () => {},
  deactivateCart: () => {},
  getLocalStorageCartItems: () => [],
});

function SetLocalStorageCartItems(cartItems: Omit<TItem, 'price'>[]) {
  localStorage.setItem('gresco-cart', JSON.stringify(cartItems));
}

function GetLocalStorageCartItems() {
  const cartItemsFromLocalStorage = localStorage.getItem('gresco-cart');

  if (cartItemsFromLocalStorage) {
    return JSON.parse(cartItemsFromLocalStorage);
  }

  return [];
}

export default function AppWrapper({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [cartItems, setCartItems] = React.useState<Omit<TItem, 'price'>[]>([]);
  const [isCartActive, setIsCartActive] = React.useState(false);

  const activateCart = React.useCallback(() => {
    setIsCartActive(true);
  }, [isCartActive]);

  const deactivateCart = React.useCallback(() => {
    setIsCartActive(false);
  }, [isCartActive]);

  const addProductToCart = React.useCallback(
    (item: Omit<TItem, 'price'>) => {
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
      getLocalStorageCartItems: GetLocalStorageCartItems,
    }),
    [cartItems, isCartActive]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return React.useContext(AppContext);
}
