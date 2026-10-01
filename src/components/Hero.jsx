import heroPerson from "../assets/Image.png";

import heroCone from "../assets/Cone.png";
import heroShape3 from "../assets/Frame.png";

import heroShape2 from "../assets/Frame (1).png";
import heroShape1 from "../assets/Frame (2).png";
import heroShape4 from "../assets/Cone (1).png";
import heroShape5 from "../assets/Cone (2).png";

import ellipse from "../assets/Ellipse 7.png";

import autoLayout from "../assets/Auto Layout Vertical.png";
import autoLayout1 from "../assets/Auto Layout Vertical (1).png";
import autoLayout2 from "../assets/Auto Layout Vertical (2).png";

export default function Hero() {
  return (
    <section className="relative min-h-[900px] overflow-hidden bg-[#1248E8]">
      {/* =========================================================
          MAIN CORNER DECORATIONS
      ========================================================= */}

      {/* FRAME - LEFT EDGE */}
      <img
        src={heroShape3}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[190px] z-10 w-[165px] object-contain sm:w-[180px] lg:w-[200px]"
      />

      {/* CONE - RIGHT EDGE */}
      <img
        src={heroCone}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[190px] z-10 w-[150px] object-contain sm:w-[165px] lg:w-[180px]"
      />

      {/* WHITE SQUIGGLE - LEFT */}
      <img
        src={heroShape2}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[17%] top-[350px] z-40 hidden w-[180px] object-contain md:block lg:w-[210px]"
      />

      {/* WHITE RING - LOWER LEFT */}
      <img
        src={heroShape5}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[7%] top-[570px] z-40 hidden w-[300px] object-contain lg:block"
      />

      {/* WHITE TRIANGLE - RIGHT */}
      <img
        src={heroShape4}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[17%] top-[350px] z-40 hidden w-[200px] object-contain md:block lg:w-[230px]"
      />

      {/* WHITE SQUIGGLE - LOWER RIGHT */}
      <img
        src={heroShape1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[570px] z-40 hidden w-[280px] object-contain lg:block"
      />
      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative flex min-h-[900px] flex-col items-center pt-32 text-center">
          {/* =====================================================
              HERO HEADING
          ===================================================== */}

          <div className="relative z-20 w-full max-w-4xl">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">
              Get Access to Hundreds
              <br />
              Courses Available
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
              Unlock practical knowledge and develop the skills you need to grow
              your career.
            </p>

            {/* =================================================
                SEARCH BAR
            ================================================= */}

            <div className="mx-auto mt-8 flex w-full max-w-[570px] flex-col gap-2 rounded-full bg-white/10 p-2 sm:flex-row">
              {/* INPUT */}
              <div className="flex h-12 min-w-0 flex-1 items-center rounded-full bg-white px-5">
                <svg
                  className="mr-3 h-5 w-5 shrink-0 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>

                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  aria-label="Search courses"
                  className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>

              {/* SEARCH BUTTON */}
              <button
                type="button"
                className="h-12 shrink-0 rounded-full bg-lime-300 px-7 text-sm font-semibold text-blue-950 transition hover:bg-lime-200"
              >
                Search
              </button>
            </div>
          </div>

          {/* =====================================================
              HERO ARTWORK
          ===================================================== */}

          <div className="relative mt-8 h-[430px] w-full sm:h-[480px] lg:h-[520px]">
            {/* =================================================
                ELLIPSE BACKGROUND
            ================================================= */}

            <img
              src={ellipse}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-auto w-[950px] max-w-none -translate-x-1/2 object-contain sm:w-[880px] lg:w-[1050px]"
            />

            {/* =================================================
                MAIN PERSON
            ================================================= */}

            <img
              src={heroPerson}
              alt="Student learning online"
              className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-[330px] w-auto max-w-none -translate-x-1/2 object-contain sm:h-[390px] lg:h-[455px]"
            />

            {/* =================================================
                UI/UX DESIGN CARD - LEFT
            ================================================= */}

            <img
              src={autoLayout1}
              alt="UI/UX Design course card"
              className="absolute left-[1%] top-[80px] z-30 w-[135px] object-contain sm:left-[8%] sm:top-[80px] sm:w-[175px] lg:left-[20%] lg:top-[65px] lg:w-[210px]"
            />

            {/* =================================================
                HAPPY STUDENTS CARD - LOWER LEFT
            ================================================= */}

            <img
              src={autoLayout2}
              alt="Happy students card"
              className="absolute bottom-[15px] left-[1%] z-30 w-[150px] object-contain sm:left-[8%] sm:w-[190px] lg:left-[20%] lg:w-[230px]"
            />

            {/* =================================================
                LEARNING PROGRESS CARD - RIGHT
            ================================================= */}

            <img
              src={autoLayout}
              alt="Learning progress card"
              className="absolute right-[1%] top-[95px] z-30 w-[140px] object-contain sm:right-[8%] sm:top-[80px] sm:w-[180px] lg:right-[20%] lg:top-[80px] lg:w-[215px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
