import React from 'react';
import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Logo from '@/components/misc/Logo';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import {
  NavbarLink,
  NavbarClass,
  MobileMenuProps,
} from '@/types/boilerplate.types';
import { motion } from 'framer-motion';

const ClassNames: NavbarClass = {
  desktop: 'hd-desktop-elm',
  mobile: 'hd-mobile-elm',
};

function MobileMenu({ isActive, children }: MobileMenuProps): JSX.Element {
  return (
    <div
      className={`${isActive ? 'translate-x-0' : 'translate-x-full'}
        fixed left-0 top-0 z-[49] flex h-full w-full flex-col items-center justify-start bg-white px-5 transition-all duration-500 lg:hidden`}
    >
      <ul className="flex h-full w-full flex-col items-center justify-center gap-10 overflow-y-auto py-[150px]">
        {children}
      </ul>
    </div>
  );
}

export default function Header(): JSX.Element {
  const Router = useRouter();
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);

  const HeaderLinks: NavbarLink[] = [
    {
      id: 0,
      name: 'Anasayfa',
      url: '/',
      classNames: ClassNames,
    },
    {
      id: 1,
      name: 'Hakkında',
      url: '/#about',
      classNames: ClassNames,
    },
    {
      id: 1,
      name: 'Satın Al',
      url: '/#buy',
      classNames: ClassNames,
    },
  ];

  const getDesktopElements = (): JSX.Element[] => {
    const elements = HeaderLinks.map(
      ({ url, name, id, classNames: { desktop: className }, external }) => (
        <li key={`d-elm-${id}`}>
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
          ) : (
            <Link className={className} href={url}>
              {name}
            </Link>
          )}
        </li>
      )
    );

    return elements;
  };

  const getMobileElements = (): JSX.Element[] => {
    const elements = HeaderLinks.map(
      ({ url, name, id, classNames: { mobile: className }, external }) => (
        <li key={`m-elm-${id}`}>
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
          ) : (
            <Link className={className} href={url}>
              {name}
            </Link>
          )}
        </li>
      )
    );

    return elements;
  };

  React.useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenu]);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [Router]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Router.pathname === '/' ? 2 : 0.5 }}
      className={`
      fixed left-0 top-0 z-[10] flex w-full items-center justify-center bg-white/80 font-theme shadow-2xl shadow-black/20 backdrop-blur-md transition-colors duration-500`}
    >
      <section className="flex w-full max-w-theme flex-wrap items-center justify-between gap-5 p-5">
        <Link href="/" className="relative z-[50]">
          <Logo className="w-full max-w-[150px] text-orange-600 transition-all duration-500" />
        </Link>
        <nav className="hidden w-fit items-center justify-center gap-5 lg:flex">
          <ul className="flex w-fit items-center justify-center gap-7">
            {getDesktopElements()}
          </ul>
        </nav>
        <section className="z-[100] flex  w-full max-w-[150px] items-center justify-end gap-5">
          <button type="button" className="text-orange-600">
            <BsBag className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex max-w-fit items-center justify-center lg:hidden"
          >
            <HiOutlineMenuAlt3
              className={`${
                mobileMenu ? ' rotate-180' : 'rotate-0'
              } h-7 w-7 text-center text-orange-600 transition-all duration-500`}
            />
          </button>
        </section>
      </section>
      <MobileMenu isActive={mobileMenu}>{getMobileElements()}</MobileMenu>
    </motion.header>
  );
}
