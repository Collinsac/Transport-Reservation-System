import React, { useRef } from "react";
import img from "../img/cites2.png";
import iconBus from "../img/iconBus.svg";
import sideImg from "../img/sideImg.svg";
import bagBus from "../img/bagBus.svg"
const LandingPage = () => {
  const contain = useRef(null);

  const ImageCard = () => {
    return (
      <div className="rounded-2xl overflow-hidden shadow-lg relative hover:scale-105 text-gray-800 font-medium">
        <img src={img} alt="image" className="w-full h-full" />
        <p className="absolute bottom-2 left-2 bg-white backdrop-blur-md backdrop-filter bg-opacity-20 py-2 px-4 rounded-full text-sm">
          Buses from Boston to New York
        </p>
      </div>
    );
  };

  const Card = () => {
    return (
      <div className=" bg-slate-100 w-72 rounded-md shadow-sm p-4 text-gray-900 text-sm">
        <div className="flex gap-1">
          <i class="fa-regular fa-star text-blue-500"></i>
          <i class="fa-regular fa-star text-blue-500"></i>
          <i class="fa-regular fa-star text-blue-500"></i>
        </div>
        <p className="my-2 font-medium">Easy and reliable</p>
        <p className="w-64">
          Easy and reliable. Great travel tool for Turkey at least.
        </p>
        <div className="flex mt-4 gap-1">
          <p className="font-medium">Gareth Chalklen,</p>
          <p className="font-light">7 hours ago</p>
        </div>
      </div>
    );
  };

  // this is the landing page as you can see it is made up of three main component the Header, DescripSection and the Footer
  return (
    <div>
      <div className="pt-12 px-5">
        {/* Hold contraol + click on any of the three components to know more (code) */}
        <p className="md:text-xl md:text-left text-center font-medium text-gray-600 bg-gray-200 py-3 px-10 w-fit mx-auto rounded-full">
          People from around the world trust Busbud
        </p>
        <div className="sm:py-16 py-8 max-w-[1000px] mx-auto relative">
          <button
            className="xl:-left-20  bg-gray-200 h-11 w-11 rounded-full absolute -left-5 top-2/4 -translate-y-1/2"
            onClick={() => (contain.current.scrollLeft -= 300)}
          >
            <i class="fa-solid fa-chevron-left text-gray-800"></i>
          </button>
          <div
            className="flex gap-3  overflow-x-scroll scroll-smooth no-scroll py-2"
            ref={contain}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <button
            className="xl:-right-20 bg-gray-200 h-11 w-11 rounded-full absolute  -right-5 top-2/4 -translate-y-1/2"
            onClick={() => (contain.current.scrollLeft += 300)}
          >
            <i class="fa-solid fa-chevron-right text-gray-800"></i>
          </button>
        </div>
        <hr className="w-[90%] mx-auto" />
      </div>
      {/*  */}
      {/*  */}
      <div className="md:px-10 px-5 py-14 text-center text-gray-600">
        <img src={iconBus} alt="icon" className="mx-auto " />
        <h2 className="my-5 sm:text-4xl text-2xl font-medium">
          Popular countries across the world
        </h2>
        <p className="max-w-[1000px] mx-auto">
          With Busbud, you can travel by bus and train in more than 80 countries
          in the world! Enjoy your trip with a seamless and hassle-free
          experience while respecting the environment by using sustainable modes
          of transportations.
        </p>

        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-5 mx-auto max-w-[1300px] mt-10 place-items-center">
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="bg-blue-200 md:px-10 py-10 px-5 mt-5 text-gray-600">
        <h2 className="text-center sm:text-4xl text-2xl font-medium">
          Top traveled bus routes
        </h2>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 gap-5 mx-auto max-w-[1300px] mt-10 justify-end">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="flex md:flex-row flex-col max-w-[1300px] mx-auto px-5 py-16">
        <div className="flex-1 md:max-w-[500px] flex justify-center items-center h-fit">
          <img src={sideImg} alt="" />
        </div>
        <div className="flex-1 py-2 text-gray-600">
          <h3 className="md:text-4xl text-2xl font-medium">
            Book your bus tickets online
          </h3>
          <p className="py-5 max-w-[700px]">
            Every day, thousands of travelers like you take buses to travel
            between cities. With Busbud, you can easily compare buses and find
            cheap bus tickets for your next bus trip. Whether you want to travel
            by bus to New York, San Francisco, Los Angeles, Boston, DC, or
            anywhere else in the world, you can check the bus schedules, ticket
            prices and the services on the bus. With Busbud, you can easily book
            your cheap bus tickets online from the best bus companies. With
            Busbud, you can easily check the bus schedules, ticket prices, cheap
            bus trips and what services are offered on the bus (WiFi, extra
            legroom, generous luggage allowance).
          </p>
          {/*  */}
          <h3 className="md:text-4xl text-2xl font-medium">
            Tips to find cheap bus tickets
          </h3>
          <h4 className="text-xl font-medium mt-4">1. Book early</h4>
          <p className="py-5 max-w-[700px]">
            You can find the best bus tickets prices by booking in advance; the
            earlier you book your bus trip generally the cheaper your tickets
            will be!
          </p>
          {/*  */}
          <h4 className="text-xl font-medium mt-4">
            2. Travel during off-peak hours
          </h4>
          <p className="py-5 max-w-[700px]">
            Summer and holiday periods are when bus tickets tend to be highest.
            These are still ideal times to travel and prices will reflect that.
            Traveling by bus gives you great flexibility. There are often
            multiple daily departures, so if you can be flexible with your
            travel dates or schedule, choosing an overnight bus or traveling
            mid-week instead of the weekend will help you save on transportation
            costs. If you can only travel on weekends, bear in mind that Sunday
            afternoon departures are usually the most expensive. If you can
            leave on Sunday or Monday morning, you might be able to save a few
            bucks on your bus tickets.
          </p>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="bg-blue-200 md:px-10 py-20 px-5 text-gray-600 ">
        <div className="min-[964px]:flex-row flex-col-reverse flex gap-16 max-w-[1300px] mx-auto">
          <div className="flex-1 mx-auto ">
            <h3 className="md:text-4xl text-2xl font-medium mb-6">Why join Busbud?</h3>
            <h4 className="font-medium ">Faster booking and checkout</h4>
            <ul className="list-disc ml-5 my-4">
              <li>Manage and cancel your trips with ease</li>
              <li>Save your payment method and billing information</li>
              <li>Save up to 5 passengers to your account!</li>
            </ul>

            <button className="min-[964px]:w-fit rounded-2xl bg-blue-500 py-5 px-7 font-medium text-white active:scale-95 w-full">Create an account</button>
          </div>
          <div className="p-5 flex-1 mx-auto">
            <img src={bagBus} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
