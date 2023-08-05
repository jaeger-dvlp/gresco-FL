/* eslint-disable react/no-array-index-key */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Item, useAppContext } from '@/contexts/App.context';

function CartItem({ item }: { item: Item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex w-full flex-row items-center justify-center gap-2 text-slate-500"
    >
      <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg" />
      <div className="flex w-full flex-col items-start justify-start gap-1">
        <p className="text-sm">{item.name}</p>
        <p className="flex flex-wrap items-center justify-start font-mono text-sm text-slate-500">
          <span className="mr-1 text-lg text-orange-600">₺{item.price}</span>x
          <span className="ml-1 bg-orange-600 px-2 pt-1 pb-1.5 text-white">
            {item.quantity}
          </span>
        </p>
      </div>
    </motion.div>
  );
}

function Cart() {
  const { isCartActive, cartItems, activateCart, clearCart } = useAppContext();

  React.useEffect(() => {
    if (cartItems.length > 0) {
      activateCart();
    }
  }, [cartItems]);
  return (
    <AnimatePresence>
      {isCartActive && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.2 }}
          style={{
            right: 0,
            width: '100%',
            height: 'auto',
            minWidth: '300px',
            maxWidth: '100%',
            minHeight: '100px',
          }}
          className="cart absolute top-20 rounded-xl border border-slate-300 bg-white p-5 shadow-xl shadow-black/20"
        >
          <div className="flex w-full items-start justify-start border-b border-b-slate-300 pb-4 text-left text-sm text-orange-600">
            Sepetim
          </div>
          {cartItems.length > 0 ? (
            <div className="flex w-full flex-col items-center justify-start gap-3 pt-5">
              {cartItems.map((item, i) => (
                <CartItem key={`cart-item-${i}`} item={item} />
              ))}
              <div className="mt-5 flex w-full items-center justify-end gap-2">
                <button
                  onClick={clearCart}
                  type="button"
                  className="px-2 text-sm text-slate-500 hover:underline"
                >
                  Temizle
                </button>
                <button type="button" className="bg-orange-600 px-3 py-1">
                  <p className="text-sm text-white">Sepeti Onayla</p>
                </button>
              </div>
            </div>
          ) : (
            <motion.div className="mt-5 flex w-full items-center justify-center">
              <p className="text-slate-400">Sepetiniz boş</p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Cart;
