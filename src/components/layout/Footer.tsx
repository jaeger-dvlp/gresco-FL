import React from 'react';
import Link from 'next/link';
import Logo from '@/components/misc/Logo';
import { BsInstagram } from 'react-icons/bs';
import { FooterSocialLink } from '@/types/boilerplate.types';

function Footer(): JSX.Element {
  const FooterSocialLinks: FooterSocialLink[] = [
    {
      id: 0,
      name: 'Instagram',
      url: 'https://www.instagram.com',
      icon: BsInstagram,
    },
  ];

  const getSocialLinks = (): JSX.Element[] => {
    const elements = FooterSocialLinks.map(({ id, url, icon: Icon }) => (
      <li key={`fs-elm-${id}`}>
        <a href={url} target="_blank" rel="noreferrer">
          <Icon className="h-4 w-4 text-black transition-all duration-150 hover:bg-white/30" />
        </a>
      </li>
    ));

    return elements;
  };

  return (
    <footer className="m-0 flex w-full flex-wrap items-center justify-center bg-white p-0">
      <section className="flex w-full max-w-theme flex-wrap items-center justify-between p-5">
        <Link href="/" className="relative">
          <Logo className="w-full max-w-[150px] text-orange-600 transition-all duration-500" />
        </Link>
        <nav className="flex items-center justify-center ">
          <ul className="flex list-none flex-wrap items-center justify-center gap-3 lg:flex-nowrap xl:flex-nowrap">
            {getSocialLinks()}
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
