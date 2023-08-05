import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

function Desc() {
  return (
    <section
      id="about"
      data-aos="fade-in"
      data-aos-delay="300"
      data-aos-duration="1000"
      className="m-0 flex w-full flex-wrap items-center justify-center p-0"
    >
      <section className="my-10 flex w-full max-w-theme flex-col items-center justify-center gap-10 p-10">
        <section className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl font-semibold text-zinc-500 lg:text-3xl">
            Neden Gresco?
          </h2>
          <p className="max-w-lg text-center text-zinc-600">
            Çevre dostu üretim, üstün kalite, ve benzersiz nargile deneyimi için
            Gresco doğal nargile kömürleri sizin için en iyi seçim.
          </p>
        </section>
        <ul className="flex w-full flex-wrap items-center justify-center gap-10">
          <li className="flex w-full max-w-[300px] flex-col items-center justify-center gap-2">
            <BsCheck2Circle size={35} className="text-orange-600" />
            <h3 className="text-lg font-semibold text-zinc-500">Doğal</h3>
            <p className="text-center text-zinc-500">
              Saflığı ve gerçek lezzetiyle öne çıkan Gresco doğal nargile
              kömürleri, en keyifli nargile deneyimini sunuyor.
            </p>
          </li>
          <li className="flex w-full max-w-[300px] flex-col items-center justify-center gap-2">
            <BsCheck2Circle size={35} className="text-orange-600" />
            <h3 className="text-lg font-semibold text-zinc-500">Uzun Ömürlü</h3>
            <p className="text-center text-zinc-500">
              Güçlü ve dayanıklı yapısıyla Gresco nargile kömürleri, uzun süreli
              ve keyif dolu nargile seansları sunuyor.
            </p>
          </li>
          <li className="flex w-full max-w-[300px] flex-col items-center justify-center gap-2">
            <BsCheck2Circle size={35} className="text-orange-600" />
            <h3 className="text-lg font-semibold text-zinc-500">
              100% Organik
            </h3>
            <p className="text-center text-zinc-500">
              Sağlığa ve çevreye dost, tamamen organik yapısıyla güvenle tercih
              edebileceğiniz bir seçenek.
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Desc;
