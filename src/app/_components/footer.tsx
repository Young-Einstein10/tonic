import React from "react";
import Image from "next/image";
import Logo from "~/public/img/logo.svg";

const Footer = () => {
  const footerMenus = [
    {
      title: "Landings",
      menus: [
        {
          name: "Home",
          link: "#",
        },
        {
          name: "Products",
          link: "/",
        },
        {
          name: "Services",
          link: "/",
        },
      ],
    },
    {
      title: "Company",
      menus: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Careers",
          link: "/",
        },
        {
          name: "Services",
          link: "/",
        },
      ],
    },
    {
      title: "Resources",
      menus: [
        {
          name: "Blog",
          link: "/",
        },
        {
          name: "Products",
          link: "/",
        },
        {
          name: "Services",
          link: "/",
        },
      ],
    },
  ];

  return (
    <footer className="pt-[100px] pl-2 sm:pl-[100px] pb-[117px] pr-2 sm:pr-[179px]">
      <div className="wrapper flex flex-col sm:flex-row justify-between gap-10 sm:gap-0">
        <div className="flex flex-col max-w-[300px]">
          <div className="mb-10">
            <Image src={Logo} alt="Boldo Logo" />
          </div>

          <p className="text-gray mb-16">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>

          <p className="text-gray">All rights reserved.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-24">
          {footerMenus.map((menu) => (
            <div key={menu.title}>
              <h3 className="text-black text-xl font-bold mb-8">
                {menu.title}
              </h3>
              <ul className="flex flex-col gap-8 text-xl">
                {menu.menus.map((menu) => (
                  <li key={menu.name}>
                    <a
                      href={menu.link}
                      className="text-gray hover:text-primary transition-colors"
                    >
                      {menu.name}
                      {menu.name === "Careers" && (
                        <span className="inline-block ml-2 bg-secondary text-primary text-[13px] font-bold px-3 py-[1px] rounded-full h-[30px]">
                          Hiring!
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
