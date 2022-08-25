import { media, mediaByIndex } from '@/constants/media';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

const Hero = () => {
  const [nextSlide, setNextSlide] = useState(1);
  const onNextSlide = () => setNextSlide((prev) => prev + 1);
  const onPrevSlide = () => setNextSlide((prev) => prev - 1);
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="grid grid-cols-[6.5fr_1.5fr_1.5fr_4.5fr_1fr_3.5fr] grid-rows-[100px_190px_240px_240px_100px_100px]">
      <div className="bg-[#F6F8FA] col-start-1 col-span-3 row-start-1 row-span-5"></div>
      <div className="col-start-1 col-span-1 row-start-2 row-span-3 relative">
        {slides.map((index) => (
          <div key={index} className="embla__slide">
            <Image
              src={mediaByIndex(nextSlide)}
              alt=""
              layout="fill"
              className="image2"
            />
          </div>
        ))}

        {/* <Image
          src="/assets/images/image1.png"
          alt=""
          className="image1"
          layout="fill"
        /> */}
      </div>
      <div className="bg-[#F6F8FA] col-start-5 col-span-2 row-start-2 row-span-2"></div>
      <div className="col-start-6 col-span-1 row-start-3 row-span-5 relative">
        <Image
          src="/assets/images/image2.png"
          alt=""
          layout="fill"
          className="image2"
        />
      </div>
      <div className="col-start-3 col-span-2 row-start-3 row-span-4">
        <h1 className=" text-6xl font-bold text-primaryColor">
          We build the future.
        </h1>
        <p className="text-secondaryColor my-6 text-xl">
          Our construction company contain a lot of experts in construction who
          can help you to build the beautiful and strong house.
        </p>
        <p className="font-medium mt-[1rem] text-xl ">
          <span className="w-[25px] h-[2px] bg-mainColor inline-block mr-5 align-middle"></span>
          <Link href="">
            <a className="text-mainColor transition-opacity hover:opacity-70">
              Learn more
            </a>
          </Link>
        </p>
      </div>
      <div className="col-start-1 col-span-1 row-start-5 row-span-1 flex w-4/5 m-auto justify-between">
        <div
          className="flex justify-between items-center min-w-[120px] text-sm
        "
        >
          <span className=" text-[#214C86]">0{nextSlide}</span>
          <div className="h-[2px] bg-secondaryColor w-full mx-1 bg-opacity-30">
            <div
              className={'h-[2px] bg-[#214C86] transition-all'}
              style={{ width: `${100 * (nextSlide / 5)}%` }}
            ></div>
          </div>
          <span className="opacity-30">05</span>
        </div>
        <div className="flex justify-between w-[4.5rem]">
          <button
            disabled={!(nextSlide % 5 !== 1)}
            className={` inline-flex  stroke-[0.5] fill-current text-green-600 w-5 h-5 transition-all ${
              nextSlide % 5 !== 1
                ? '-scale-[2.5] hover:-scale-[2.7]'
                : '-scale-[1.5]'
            }`}
            onClick={onPrevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              className={`${
                nextSlide % 5 !== 1
                  ? 'fill-[#214C86] stroke-[#214C86]'
                  : 'fill-secondaryColor stroke-secondaryColor '
              } stroke-[0.5]`}
            >
              <path d="m31.9 13.4-1.41 1.41 4.21 4.21h-33.1v2h33.1l-4.21 4.21 1.41 1.41 5.21-5.21 1.42-1.41-1.42-1.41z"></path>
            </svg>
          </button>
          <button
            disabled={!(nextSlide % 5 !== 0)}
            className={`inline-flex fill-current text-green-600 w-5 h-5 transition-all ${
              nextSlide % 5 !== 0
                ? 'scale-[2.5] hover:scale-[2.7]'
                : 'scale-[1.5]'
            }`}
            onClick={onNextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              className={`${
                nextSlide % 5 !== 0
                  ? 'fill-[#214C86] stroke-[#214C86]'
                  : 'fill-secondaryColor stroke-secondaryColor '
              } stroke-[0.5]`}
            >
              <path d="m31.9 13.4-1.41 1.41 4.21 4.21h-33.1v2h33.1l-4.21 4.21 1.41 1.41 5.21-5.21 1.42-1.41-1.42-1.41z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="col-start-2 col-span-2 row-start-5 row-span-1">
        <button className="bg-mainColor w-full h-full text-[#fff] flex justify-around items-center hover:shadow-lg hover:shadow-mainColor transition-all active:bg-[white]">
          {/* <Image src={} alt='' layout='responsive' className='w-[25px] h-[2px] bg-mainColor inline-block mr-5 align-middle'/> */}
          <span className=" inline-block p-2 bg-[white] rounded-full bg-opacity-50">
            <span className=" bg-[white] p-4 block rounded-full">
              <AiFillCaretRight color={'#204C85'} />
            </span>
          </span>
          Watch Video
        </button>
      </div>
      {/* <div className="embla">
        <div className="embla__viewport">
          <div className="embla__container">
            <div className="embla__slide">
              <img className="embla__slide__img" src="media/media-1.jpeg" />
            </div>
            <div className="embla__slide">
              <img className="embla__slide__img" src="media/media-2.jpeg" />
            </div>
            <div className="embla__slide">
              <img className="embla__slide__img" src="media/media-3.jpeg" />
            </div>
            <div className="embla__slide">
              <img className="embla__slide__img" src="media/media-4.jpeg" />
            </div>
            <div className="embla__slide">
              <img className="embla__slide__img" src="media/media-5.jpeg" />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
