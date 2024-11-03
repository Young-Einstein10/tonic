import React from "react";
import Image from "next/image";
import BoldoLogo from "~/public/img/logo.svg";
import PrestoLogo from "~/public/img/logo-2.svg";

const Partners = () => {
  const partners = [
    {
      name: "Boldo",
      src: BoldoLogo,
    },
    {
      name: "Presto",
      src: PrestoLogo,
    },
    {
      name: "Boldo 1",
      src: BoldoLogo,
    },
    {
      name: "Presto 1",
      src: PrestoLogo,
    },
    {
      name: "Boldo 2",
      src: BoldoLogo,
    },
    {
      name: "Presto 2",
      src: PrestoLogo,
    },
    {
      name: "Boldo 3",
      src: BoldoLogo,
    },
    {
      name: "Presto 3",
      src: PrestoLogo,
    },
  ];

  return (
    <div className="partners px-4 relative overflow-hidden">
      <div className="mt-[99.55px] mb-[75.63px] max-w-[1119px] mx-auto flex gap-14 pb-4 group before:left-0 before:bg-mask-left before:absolute before:z-10 before:h-full before:block before:top-0 before:bottom-0 before:w-[100px] after:right-0 after:bg-mask-right after:absolute after:z-10 after:h-full after:block after:top-0 after:bottom-0 after:w-[100px]">
        <div className="flex gap-14 animate-loop-scroll group-hover:paused">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex-shrink-0 w-[145px] h-[42px]"
            >
              <Image src={partner.src} alt={partner.name} />
            </div>
          ))}
        </div>
        <div
          className="flex gap-14 animate-loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex-shrink-0 w-[145px] h-[42px]"
            >
              <Image src={partner.src} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
