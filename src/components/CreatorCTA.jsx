import heroCone from "../assets/Cone.png";
import heroShape3 from "../assets/Frame.png";

import heroShape2 from "../assets/Frame (1).png";
import heroShape1 from "../assets/Frame (2).png";
import heroShape4 from "../assets/Cone (1).png";
import heroShape5 from "../assets/Cone (2).png";

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1248E8]">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* LEFT YELLOW SQUIGGLE */}
      <div className="pointer-events-none absolute -left-8 bottom-[-5px] z-10 hidden rotate-[10deg] lg:block">
        <div className="h-5 w-24 rounded-full bg-lime-300" />
        <div className="-mt-2 h-5 w-20 rounded-full bg-lime-300" />
        <div className="-mt-2 h-5 w-24 rounded-full bg-lime-300" />
      </div>

      {/* LEFT WHITE SQUIGGLE */}
      <div className="pointer-events-none absolute left-[14%] bottom-[25px] z-10 hidden rotate-[-15deg] md:block">
        <div className="h-3 w-12 rounded-full bg-white" />
        <div className="-mt-1 h-3 w-10 rounded-full bg-white" />
        <div className="-mt-1 h-3 w-12 rounded-full bg-white" />
      </div>

      {/* FRAME - LEFT EDGE */}
      <img
        src={heroShape3}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[25px] z-10 w-[110px] object-contain sm:w-[135px] lg:w-[160px]"
      />

      {/* CONE - RIGHT EDGE */}
      <img
        src={heroCone}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[25px] z-10 w-[100px] object-contain sm:w-[125px] lg:w-[150px]"
      />

      {/* WHITE SQUIGGLE - LEFT */}
      <img
        src={heroShape2}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[55px] z-40 hidden w-[120px] object-contain md:block lg:w-[150px]"
      />

      {/* WHITE RING - LOWER LEFT */}
      <img
        src={heroShape5}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-55px] left-[4%] z-40 hidden w-[190px] object-contain lg:block"
      />

      {/* WHITE TRIANGLE - RIGHT */}
      <img
        src={heroShape4}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-[55px] z-40 hidden w-[130px] object-contain md:block lg:w-[160px]"
      />

      {/* WHITE SQUIGGLE - LOWER RIGHT */}
      <img
        src={heroShape1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25px] right-[3%] z-40 hidden w-[190px] object-contain lg:block"
      />

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 lg:py-20">
        <h2 className="mx-auto max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[32px]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[9px] leading-5 text-blue-100 sm:text-[10px]">
          Experience the collaboration of numerous creators and a expanding
          selection of courses. Together, we&apos;re proud to become a part of a
          community comprising over 10,000 local and international creators.
          Utilize our Course Editor, and showcase your expertise by publishing
          your course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-7 rounded-full bg-lime-300 px-7 py-2.5 text-[9px] font-bold text-slate-900 shadow-sm transition hover:bg-lime-200"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}
