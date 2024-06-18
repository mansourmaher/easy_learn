import Bannner from "@/components/banner";
import { Logo } from "../(dashboard)/_components/logo";
import CarouselFetchDta from "./_compoents/carouselfetchdata";
import CourseCarousel from "./_compoents/coursecarousel";
import CourseCarouselFetchdata from "./_compoents/coursecarouselfetchdata";
import JoinBtn from "./_compoents/joinbtn";

function Page() {
  return (
    <>
      <header className="mt-4 top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav
          className="flex  justify-between items-center bg-gray-50 md:py-2 max-w-[66rem] w-full  rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between  mx-2 lg:mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center justify-between ">
            <div className="w-[190px]">
              <Logo />
            </div>
          </div>

          <div>
            <JoinBtn />
          </div>
        </nav>
      </header>

      <main id="content">
        <div className="relative overflow-hidden ">
          <svg
            className="absolute  start-1/2 w-[1900px] transform -translate-x-1/2"
            width="2745"
            height="488"
            viewBox="0 0 2745 488"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
          </svg>

          <div className="relative ">
            <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
              <h1 className="font-semibold text-white text-5xl md:text-6xl">
                {/* <span className="text-cyan-500">Ease Learn:</span> */}
                <span className="text-black">
                  {/* i want simple phrase for elarning system */}
                  The Best Way for your learning
                </span>
              </h1>
              <div className="max-w-4xl">
                <p className="mt-5 text-neutral-400 text-lg">
                  {/* i want simple phrase for elarning system add more details */}
                  Welcome to Ease Learn, where knowledge meets opportunity. Our
                  platform offers a comprehensive library of courses designed by
                  industry experts, ensuring you gain the skills you need to
                  excel in your career. With personalized learning paths,
                  flexible schedules, and interactive content, you can learn at
                  your own pace and convenience. Earn recognized certifications
                  and join a vibrant community of learners and professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
            <div className="border rounded-xl">
              <div className="p-4 lg:p-8   rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg
                      className="flex-shrink-0 size-6 sm:size-8 text-[#0059ff] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                      <path d="m21 3 1 11h-2" />
                      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                      <path d="M3 4h8" />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold ">
                        2,000+
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Teachers
                      </p>
                    </div>
                  </div>

                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <div className="flex justify-center items-center -space-x-5">
                      <img
                        className="relative z-[2] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                        src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                      <img
                        className="relative z-[1] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7"
                        src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                      <img
                        className="relative flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                        src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=320&amp;h=320&amp;q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold ">
                        85%
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Happy Students
                      </p>
                    </div>
                  </div>

                  <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                    <svg
                      className="flex-shrink-0 size-6 sm:size-8 text-[#0059ff] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                      <path d="m2 16 6 6" />
                      <circle cx="16" cy="9" r="2.9" />
                      <circle cx="6" cy="5" r="3" />
                    </svg>
                    <div className="mt-3 sm:mt-5">
                      <h3 className="text-lg sm:text-3xl font-semibold ">
                        $55M+
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-neutral-400">
                        Ads managed yearly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* @ts-ignore */}
        <CourseCarouselFetchdata />
        {/* <Bannner title="Ready to learn something new? Register now and connect with our expert teachers!" />

        <CarouselFetchDta /> */}

        <div className="">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="font-semibold text-2xl md:text-4xl md:leading-tight">
                Our Approach to Learning
              </h2>
              <p className="mt-1">
                This guiding principle informs our holistic approach — from
                meticulous curriculum design and strategic teaching methods to
                the seamless execution of our platform's features and
                educational content delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image Description"
                />
              </div>

              <div>
                <div className="mb-4">
                  <h3 className="text-xs font-medium uppercase text-[#0059ff]">
                    Steps
                  </h3>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[rgb(0,89,255)] font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="font-semibold text-neutral-800">
                        Course Proposal and Design:
                      </span>{" "}
                      Develop comprehensive courses tailored to meet your needs.
                      Each course is divided into manageable chapters, each
                      containing videos and resources to support your learning.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border  border-neutral-800 text-[rgb(0,89,255)] font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="font-semibold text-neutral-800">
                        Interactive Learning and Engagement:
                      </span>{" "}
                      Progress through chapters by engaging with videos and
                      resources, submitting assignments, and unlocking quizzes.
                      Complete quizzes and assessments to reinforce your
                      learning and gauge your understanding before moving
                      forward.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#04f] font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="font-semibold text-neutral-800">
                        Progress Tracking and Certification:
                      </span>{" "}
                      Track your progress and performance throughout the course.
                      Unlock chapters sequentially as you meet prerequisites and
                      earn certificates upon successful course completion.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[rgb(0,89,255)] font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="font-semibold text-neutral-800">
                        Launch and Continuous Improvement:
                      </span>{" "}
                      Access a wide range of courses designed to help you
                      succeed. Provide feedback to help us continually refine
                      and optimize our courses and platform functionality for a
                      superior learning experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className=" font-semibold text-2xl md:text-4xl md:leading-tight">
                Contact us
              </h2>
              <p className="mt-1">
                Whatever your goal - we will get you there.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
              <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                <form>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-name"
                        className="peer p-4 block w-full  border-transparent rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                        placeholder="Name"
                      />
                      <label
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="hs-tac-input-email"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                        placeholder="Email"
                      />
                      <label
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Email
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-company"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                        placeholder="Company"
                      />
                      <label
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Company
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="hs-tac-input-phone"
                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                        placeholder="Phone"
                      />
                      <label
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Phone
                      </label>
                    </div>

                    <div className="relative">
                      <textarea
                        id="hs-tac-message"
                        className="peer p-4 block w-full  border-transparent rounded-lg text-sm  placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                        placeholder="This is a textarea placeholder"
                      ></textarea>
                      <label
                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                      >
                        Tell us about your project
                      </label>
                    </div>
                  </div>

                  <div className="mt-2">
                    <p className="text-xs text-neutral-500">
                      All fields are required
                    </p>

                    <p className="mt-5">
                      <a
                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#06f] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                        href="#"
                      >
                        Submit
                        <svg
                          className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </form>
              </div>

              <div className="space-y-14">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">Our address:</h4>

                    <address className="mt-1 text-neutral-400 text-sm not-italic">
                      300 Bath Street, Tay House
                      <br />
                      Glasgow G2 4JR, United Kingdom
                    </address>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">Email us:</h4>

                    <a
                      className="mt-1 text-neutral-400 text-sm"
                      href="#mailto:example@site.co"
                      target="_blank"
                    >
                      hello@example.so
                    </a>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 size-6 text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                  <div className="grow">
                    <h4 className="text-white font-semibold">We're hiring</h4>
                    <p className="mt-1 text-neutral-400">
                      We're thrilled to announce that we're expanding our team
                      and looking for talented individuals like you to join us.
                    </p>
                    <p className="mt-2">
                      <a
                        className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#0059ff] decoration-2 hover:underline focus:outline-none focus:underline"
                        href="#"
                      >
                        Job openings
                        <svg
                          className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}

export default Page;
