import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/components/misc/Logo';

import BannerImage from '@/public/assets/img/bannerImage.jpeg';

function Banner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'anticipate', stiffness: 900 }}
      style={{
        backgroundImage:
          'linear-gradient(-45deg, #fff, #fff, #fff, rgb(249,115,22))',
      }}
      className="flex max-h-[2000px] min-h-screen w-full flex-wrap items-center justify-center gap-20 overflow-hidden pt-[100px]"
    >
      <section className="flex w-full max-w-theme flex-wrap items-center justify-center gap-20 overflow-hidden p-10">
        <motion.img
          alt="Gresco"
          transition={{
            duration: 1.5,
            ease: 'anticipate',
            stiffness: 900,
            delay: 0.3,
          }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          initial={{ opacity: 0, scale: 0.9, x: -400, y: -400 }}
          src={BannerImage.src}
          className="w-full max-w-[410px] rounded-xl object-contain object-center shadow-2xl shadow-black/30"
        />
        <motion.section
          transition={{
            duration: 1.5,
            ease: 'anticipate',
            stiffness: 900,
            delay: 0.8,
          }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 200 }}
          className="flex h-fit w-full max-w-lg flex-col items-center justify-center gap-0 text-center lg:max-w-lg lg:items-start lg:text-left"
        >
          <Logo className="mb-10 w-full max-w-[250px] text-orange-500" />
          <h2
            className="text-xl font-normal uppercase text-orange-600 lg:text-2xl"
            style={{ letterSpacing: '5px' }}
          >
            Doğal Nargile Kömürü
          </h2>
          <p className="text-sm font-light text-zinc-500 lg:text-base">
            Sonsuz Keyif, Gerçek Lezzet. Gresco Doğal Nargile Kömürleri. En iyi
            nargile deneyimi için tasarlanan çevre dostu ve kaliteli nargile
            kömürleriyle buluşun. Şimdi zevkinizi doruklara çıkarın!
          </p>
          <section
            style={{
              letterSpacing: '2px',
            }}
            className="mt-10 flex h-fit w-fit flex-wrap items-center justify-center gap-5 lg:justify-start"
          >
            <Link
              className="flex items-center justify-center border border-orange-600 bg-orange-600 px-5 py-2 text-sm uppercase text-white shadow-2xl shadow-black/20 transition-all duration-200 hover:bg-white hover:text-orange-600"
              href="/#buy"
            >
              Satın Al
            </Link>
            <Link
              className="flex items-center justify-center bg-white px-5 py-2 text-sm uppercase text-orange-600 shadow-2xl shadow-black/20 transition-all duration-200 hover:underline"
              href="/#about"
            >
              Detaylı Gör
            </Link>
          </section>
        </motion.section>
      </section>
    </motion.section>
  );
}

export default Banner;
