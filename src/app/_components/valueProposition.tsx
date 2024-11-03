import React from "react";
import Image, { StaticImageData } from "next/image";
import Collaboration from "~/public/img/Rectangle_1270_3.png";
import BlogCover1 from "~/public/img/Rectangle_1270_4.png";
import BlogCover2 from "~/public/img/Rectangle_1270_5.png";
import BlogCover3 from "~/public/img/Rectangle_1270_6.png";
import Avatar from "~/public/img/Ellipse_10.png";
import Avatar1 from "~/public/img/Ellipse_10_1.png";
import Avatar2 from "~/public/img/Ellipse_10_2.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "../../components/ui";

interface BlogProps {
  title: string;
  category: string;
  date: string;
  avatar: StaticImageData;
  author: string;
  img: StaticImageData;
}

interface BlogCardProps {
  blog: BlogProps;
}

const BlogCard = ({ blog }: BlogCardProps) => (
  <div className="flex-1">
    <div className="h-[209px] mb-6 relative">
      <Image src={blog.img} alt={blog.title} fill />
    </div>

    <div>
      <div className="flex items-center gap-3 mb-3">
        <p className="text-primary">{blog.category}</p>
        <span className="text-gray">{blog.date}</span>
      </div>

      <div className="mb-5">
        <p>{blog.title}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8">
          <Image src={blog.avatar} alt={blog.author} className="rounded-full" />
        </div>
        <p>{blog.author}</p>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Pitch termsheet backing validation focus release.",

      category: "Category",
      date: "November 22, 2021",
      avatar: Avatar,
      author: "Chandler Bing",
      img: BlogCover1,
    },
    {
      title:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",

      category: "Category",
      date: "November 22, 2021",
      avatar: Avatar1,
      author: "Rachel Green",
      img: BlogCover2,
    },
    {
      title:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",

      category: "Category",
      date: "November 22, 2021",
      avatar: Avatar2,
      author: "Monica Geller",
      img: BlogCover3,
    },
  ];

  return (
    <div className="mb-[124px]">
      <div className="max-w-[842px] mx-auto mb-[79px] text-center">
        <p className="mb-3 text-xl text-gray leading-8">Our Blog</p>
        <h2 className="text-4xl sm:text-5xl sm:leading-[72px] font-manrope">
          Value proposition accelerator product management venture
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-10 sm:gap-[50px] mb-[84px]">
        {blogPosts.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg" className="w-[219px]">
          Load more
        </Button>
      </div>
    </div>
  );
};

const AccordionSection = () => {
  const accordionData = [
    {
      title: "We connect our customers with the best?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae assumenda qui harum, asperiores ullam possimus? Dolorem, similique ut harum laudantium accusamus eius commodi, libero exercitationem, neque repellendus asperiores cum laboriosam!",
    },
    {
      title: "Android research & development rockstar?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae assumenda qui harum, asperiores ullam possimus? Dolorem, similique ut harum laudantium accusamus eius commodi, libero exercitationem, neque repellendus asperiores cum laboriosam!",
    },
  ];

  return (
    <div className="w-full max-w-[500px] flex flex-col">
      <Accordion type="single" collapsible>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={item.title}
            value={`item-${index}`}
            className="border-b border-b-[#C4C4C4] mb-4"
          >
            <AccordionTrigger className="text-xl font-normal hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-xl font-medium">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const ValueProposition = () => {
  return (
    <section id="value-proposition" className="py-[120px]">
      <div className="wrapper max-w-[1100px] ">
        <div className="mb-14">
          <Image src={Collaboration} alt="Collaboration & Communication" />
        </div>

        <div className="flex flex-col sm:flex-row gap-10 items-center justify-between mb-[158px]">
          <div className="max-w-[500px]">
            <h4 className="text-[36px] leading-[56px] font-manrope">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h4>
          </div>

          <AccordionSection />
        </div>

        <BlogSection />
      </div>
    </section>
  );
};

export default ValueProposition;
