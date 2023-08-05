import React from 'react';
import CountUp from 'react-countup';
import { AiOutlineShop } from 'react-icons/ai';
import { BiHappyBeaming, BiWorld } from 'react-icons/bi';

function Counters() {
  return (
    <section className="m-0 my-10 flex w-full flex-col items-center justify-center bg-white p-0">
      <ul
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="flex w-full max-w-theme list-none flex-wrap items-center justify-center gap-20 px-10"
      >
        <li className="flex w-full max-w-[200px] flex-col items-center justify-center gap-2">
          <AiOutlineShop size={40} className="text-orange-600" />
          <p className="flex flex-row items-center justify-center">
            <CountUp
              end={200}
              duration={3}
              useEasing
              delay={1}
              scrollSpyOnce
              enableScrollSpy
              className="text-3xl font-semibold text-zinc-500"
            />
            <span className="text-3xl font-semibold text-orange-600">+</span>
          </p>
          <p className="text-lg font-medium text-zinc-500">Mağaza</p>
        </li>
        <li className="flex w-full max-w-[200px] flex-col items-center justify-center gap-2">
          <BiHappyBeaming size={40} className="text-orange-600" />
          <p className="flex flex-row items-center justify-center">
            <CountUp
              end={10000}
              duration={3}
              useEasing
              delay={1}
              scrollSpyOnce
              enableScrollSpy
              className="text-3xl font-semibold text-zinc-500"
            />
            <span className="text-3xl font-semibold text-orange-600">+</span>
          </p>
          <p className="text-lg font-medium text-zinc-500">Mutlu Müşteri</p>
        </li>
        <li className="flex w-full max-w-[200px] flex-col items-center justify-center gap-2">
          <BiWorld size={40} className="text-orange-600" />
          <p className="flex flex-row items-center justify-center">
            <CountUp
              end={10}
              duration={3}
              useEasing
              delay={1}
              scrollSpyOnce
              enableScrollSpy
              className="text-3xl font-semibold text-zinc-500"
            />
            <span className="text-3xl font-semibold text-orange-600">+</span>
          </p>
          <p className="text-lg font-medium text-zinc-500">Ülke</p>
        </li>
      </ul>
    </section>
  );
}

export default Counters;
