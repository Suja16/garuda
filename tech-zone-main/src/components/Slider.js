// import { useState } from "react";
// import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

// import Slide from "./Slide";

// const data = [
//   {
//     id: 1,
//     src: "https://www.mrdiy.co.in/?cur=promotion/download&fid=20",
//     headline: "",
//     body: "",
//     cta: "Shop now",
//     category: "sale",
//   },
//   {
//     id: 2,
//     src: "https://media.cntraveler.com/photos/54e368046450ad091fd9a8e8/16:9/w_2580,c_limit/martha-graeff-nyfw-tout.jpg",
//     headline: "Shop For the Latest Trends",
//     body: "By the latest dresses and clothes at great prices and take your fashion game to the next level ",
//     cta: "Shop now",
//     category: "fashion",
//   },
//   {
//     id: 3,
//     src: "https://i.ibb.co/kmr5qQv/headphones.jpg",
//     headline: "Exciting Tech Deals",
//     body: "Get your hands on the latest tech products.",
//     cta: "Shop now",
//     category: "electronics",
//   },
//   {
//     id: 4,
//     src: "https://www.bergerpaints.com/blog/wp-content/uploads/2023/06/Minimalist-home-decor-1280x720.png",
//     headline: "Spruce Up Your Home",
//     body: "Furnish your home with the best home decor options.",
//     cta: "Shop now",
//     category: "home decor",
//   },
//   {
//     id: 5,
//     src: "https://cdn.theatlantic.com/thumbor/hmUEQDSWj9xDrDAF17KdbY1uxnw=/0x0:4800x2700/1600x900/media/img/mt/2022/12/What_Gifts_Say/original.jpg",
//     headline: "Gifts to Offer",
//     body: "Want to gift a friend or a loved one. We provide offers on purchases made as gifts.",
//     cta: "Shop now",
//     category: "gifts",
//   },
// ];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const prevBtn = () => {
//     setCurrentSlide(
//       currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
//     );
//   };

//   const nextBtn = () => {
//     setCurrentSlide(
//       currentSlide === data.length - 1 ? 0 : (nextSlide) => nextSlide + 1
//     );
//   };
//   return (
//     <div className="slider-frame relative">
//       <div
//         className="slider"
//         style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
//       >
//         {data.map((item) => (
//           <Slide item={item} key={item.id} />
//         ))}
//       </div>
//       <div className="slider-btns absolute bottom-5 left-0 right-0 z-[1] text-2xl flex gap-5 m-auto w-fit">
//         <button
//           onClick={prevBtn}
//           className="prevArrow h-12 w-10 flex justify-center items-center bg-violet-900 text-violet-200 border-none hover:bg-gray-900 hover:text-gray-200 duration-300 "
//         >
//           {<BsArrowLeftShort />}
//         </button>
//         <button
//           onClick={nextBtn}
//           className="nextArrow h-12 w-10 flex justify-center items-center bg-violet-900 text-violet-200 border-none hover:bg-gray-900 hover:text-gray-200 duration-300 "
//         >
//           {<BsArrowRightShort />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://www.mrdiy.co.in/?cur=promotion/download&fid=20",
    headline: "",
    body: "",
    cta: "Shop now",
    category: "sale",
  },
  {
    id: 2,
    src: "https://media.cntraveler.com/photos/54e368046450ad091fd9a8e8/16:9/w_2580,c_limit/martha-graeff-nyfw-tout.jpg",
    headline: "Shop For the Latest Trends",
    body: "Buy the latest dresses and clothes at great prices and take your fashion game to the next level.",
    cta: "Shop now",
    category: "fashion",
  },
  {
    id: 3,
    src: "https://i.ibb.co/kmr5qQv/headphones.jpg",
    headline: "Exciting Tech Deals",
    body: "Get your hands on the latest tech products.",
    cta: "Shop now",
    category: "electronics",
  },
  {
    id: 4,
    src: "https://www.bergerpaints.com/blog/wp-content/uploads/2023/06/Minimalist-home-decor-1280x720.png",
    headline: "Spruce Up Your Home",
    body: "Furnish your home with the best home decor options.",
    cta: "Shop now",
    category: "home decor",
  },
  {
    id: 5,
    src: "https://cdn.theatlantic.com/thumbor/hmUEQDSWj9xDrDAF17KdbY1uxnw=/0x0:4800x2700/1600x900/media/img/mt/2022/12/What_Gifts_Say/original.jpg",
    headline: "Gifts to Offer",
    body: "Want to gift a friend or a loved one? We provide offers on purchases made as gifts.",
    cta: "Shop now",
    category: "gifts",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevBtn = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : currentSlide - 1
    );
  };

  const nextBtn = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className="slider-frame relative" style={{ height: "312px" }}>
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((item) => (
          <Slide item={item} key={item.id} />
        ))}
      </div>
      <div className="slider-btns absolute bottom-5 left-0 right-0 z-[1] text-2xl flex gap-5 m-auto w-fit">
        <button
          onClick={prevBtn}
          className="prevArrow h-12 w-10 flex justify-center items-center bg-violet-900 text-violet-200 border-none hover:bg-gray-900 hover:text-gray-200 duration-300 "
        >
          {<BsArrowLeftShort />}
        </button>
        <button
          onClick={nextBtn}
          className="nextArrow h-12 w-10 flex justify-center items-center bg-violet-900 text-violet-200 border-none hover:bg-gray-900 hover:text-gray-200 duration-300 "
        >
          {<BsArrowRightShort />}
        </button>
      </div>
    </div>
  );
};

export default Slider;
