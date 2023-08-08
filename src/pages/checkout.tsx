/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Meta from '@/components/layout/Meta';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { AllProducts, useAppContext } from '@/contexts/App.context';

function InputContainer({
  id,
  label,
  error,
  children,
  required,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="grid w-full grid-cols-1 place-content-start place-items-stretch gap-2"
    >
      <span className="text-sm text-slate-500">
        {label}
        {required && <span className="text-red-500">*</span>}
      </span>
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
}

function Checkout() {
  const { isReady, push } = useRouter();
  const formRef = React.useRef<HTMLFormElement>(null);
  const { cartItems, getLocalStorageCartItems } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const totalPrice = React.useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const itemPrice = AllProducts.find((i) => i.id === item.id)?.price || 0;

      return acc + Math.floor(itemPrice * item.quantity * 100) / 100;
    }, 0);
  }, [cartItems]);

  const onSubmit = () => {};

  React.useEffect(() => {
    if (
      cartItems.length === 0 &&
      isReady &&
      getLocalStorageCartItems().length === 0
    ) {
      push('/');
    }
  }, [cartItems, isReady]);

  return (
    <>
      <Meta
        title="Ödeme | Gresco"
        description="Gresco - Doğal Nargile Kömürü Markanız. Eşsiz kalitede ve çevre dostu nargile kömürleriyle benzersiz bir içim deneyimi keşfedin."
      />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="m-0 flex min-h-screen flex-col items-center justify-start bg-white p-0 pt-[100px] font-theme"
      >
        <section className="grid w-full max-w-theme grid-cols-1 place-content-start place-items-center gap-10 p-10 lg:grid-cols-2">
          <section className="col-span-full flex w-full items-center justify-start">
            <h1 className="text-2xl font-semibold text-orange-600 lg:text-3xl">
              Siparişi Tamamla
            </h1>
          </section>
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="grid w-full grid-cols-1 place-content-start place-items-start gap-5"
          >
            <section className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
              <InputContainer
                required
                id="name"
                label="İsim"
                error={errors?.name?.message as string}
              >
                <input
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Bu alan zorunludur.',
                    },
                  })}
                  id="name"
                  type="text"
                  className="w-full rounded-md border border-slate-400 p-2 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </InputContainer>
              <InputContainer
                required
                id="surname"
                label="Soyisim"
                error={errors?.surname?.message as string}
              >
                <input
                  {...register('surname', {
                    required: {
                      value: true,
                      message: 'Bu alan zorunludur.',
                    },
                  })}
                  id="surname"
                  type="text"
                  className="w-full rounded-md border border-slate-400 p-2 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </InputContainer>
            </section>
            <InputContainer
              required
              id="email"
              label="E-Posta Adresi"
              error={errors?.email?.message as string}
            >
              <input
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Bu alan zorunludur.',
                  },
                  validate: {
                    email: (value) => {
                      const emailRegex =
                        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                      return emailRegex.test(value) || 'Geçersiz e-posta.';
                    },
                  },
                })}
                id="email"
                type="email"
                className="w-full rounded-md border border-slate-400 p-2 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </InputContainer>
            <InputContainer
              required
              id="phone"
              label="Telefon Numarası"
              error={errors?.phone?.message as string}
            >
              <section className="flex w-full flex-row items-start justify-start gap-0 font-mono">
                <span className="flex h-full items-center justify-center rounded-md rounded-r-none border border-r-0 border-slate-400 p-2 px-4 text-slate-500 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600">
                  +90
                </span>
                <input
                  {...register('phone', {
                    required: {
                      value: true,
                      message: 'Bu alan zorunludur.',
                    },
                    validate: {
                      phone: (value) => {
                        const phoneRegex = /^\d{10}$/;
                        return (
                          phoneRegex.test(value) || 'Geçersiz telefon numarası.'
                        );
                      },
                    },
                  })}
                  id="phone"
                  type="phone"
                  className="w-full rounded-md rounded-l-none border border-slate-400 p-2 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </section>
            </InputContainer>
            <section className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
              <InputContainer
                required
                id="province"
                label="İl"
                error={errors?.province?.message as string}
              >
                <input
                  {...register('province', {
                    required: {
                      value: true,
                      message: 'Bu alan zorunludur.',
                    },
                  })}
                  id="province"
                  type="text"
                  className="w-full rounded-md border border-slate-400 p-2 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </InputContainer>
              <InputContainer
                required
                id="district"
                label="İlçe"
                error={errors?.district?.message as string}
              >
                <input
                  {...register('district', {
                    required: {
                      value: true,
                      message: 'Bu alan zorunludur.',
                    },
                  })}
                  id="district"
                  type="text"
                  className="w-full rounded-md border border-slate-400 p-2 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </InputContainer>
            </section>
            <InputContainer
              required
              id="address"
              label="Adres"
              error={errors?.address?.message as string}
            >
              <textarea
                {...register('address', {
                  required: {
                    value: true,
                    message: 'Bu alan zorunludur.',
                  },
                  validate: {
                    address: (value) => {
                      const minLength = 10;
                      return (
                        value.length >= minLength ||
                        `Adres en az ${minLength} karakter olmalıdır.`
                      );
                    },
                  },
                })}
                id="address"
                className="min-h-[100px] w-full rounded-md border border-slate-400 p-2 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </InputContainer>
          </form>
          <ul className="flex h-full w-full flex-col items-start justify-start gap-5">
            {cartItems.map((item, i) => (
              <li
                key={`ct-item-${i}`}
                className="flex w-full flex-row items-center justify-start gap-5 rounded-sm border border-slate-200 p-5 shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-square w-full max-w-[150px] rounded-md border border-slate-300 object-cover object-center"
                />
                <div className="flex w-full flex-col items-start justify-center gap-0">
                  <p className="text-lg font-semibold text-slate-500">
                    {item.name}
                  </p>
                  <p className="font-mono text-sm text-slate-500">
                    <span className="text-orange-600">{item.quantity}</span>{' '}
                    Adet
                  </p>
                </div>
              </li>
            ))}
            <div className="mt-5 flex w-full flex-col items-end justify-center gap-2">
              <p className="font-mono text-xl">
                Toplam :{' '}
                <span className="total-price text-orange-600">
                  ₺{totalPrice}
                </span>
              </p>
              <button
                type="button"
                className="border border-orange-600 bg-orange-600 px-5 py-2 text-center text-white shadow-lg transition-all duration-150 hover:bg-white hover:text-orange-600"
                onClick={() => formRef.current?.requestSubmit()}
              >
                Ödemeyi Tamamla
              </button>
            </div>
          </ul>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}

export default Checkout;
