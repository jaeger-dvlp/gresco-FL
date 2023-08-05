import React from 'react';
import ProductArtImage from '@/public/assets/img/productArt.jpeg';

function Buy() {
  return (
    <section
      id="buy"
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1000"
      className="m-0 my-10 flex w-full items-center justify-center p-0"
    >
      <section className="grid w-full max-w-md grid-cols-1 place-content-start place-items-center gap-10 p-10 lg:max-w-theme lg:grid-cols-2">
        <section className="order-1 flex w-full flex-col items-center justify-start gap-5 !text-center lg:-order-1 lg:items-start lg:!text-left">
          <p className="text-lg font-semibold text-zinc-500">
            Gresco doğal nargile kömürleri ile nargile keyfinizi muhteşem bir
            deneyime dönüştürün. %100 organik içeriği ve doğal yapısıyla
            sağlığınızı korurken, gerçek ve saf bir lezzet sunar. Uzun ömürlü
            yanma süresi sayesinde nargile seanslarınızı keyifle
            uzatabilirsiniz.
          </p>
          <p className="text-base font-normal text-zinc-500">
            Gresco doğal nargile kömürlerini hemen sepetinize ekleyin ve
            unutulmaz nargile keyfinin tadını çıkarın!
          </p>
          <p className="space-x-2 text-2xl font-semibold text-orange-600">
            <span>₺ 89.99</span>
            <span className="text-sm font-normal">+ KDV</span>
          </p>
          <button
            type="button"
            className="flex items-center justify-center border border-orange-600 bg-orange-600 px-5 py-2 text-sm uppercase text-white shadow-2xl shadow-black/20 transition-all duration-200 hover:bg-white hover:text-orange-600"
          >
            Sepete Ekle
          </button>
        </section>
        <section className="-order-1 flex w-full items-center justify-center lg:order-1">
          <img
            alt="Gresco"
            src={ProductArtImage.src}
            className="w-full rounded-xl object-contain object-center shadow-2xl shadow-black/30"
          />
        </section>
      </section>
    </section>
  );
}

export default Buy;
