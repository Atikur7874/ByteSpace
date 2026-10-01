import growthPerson from "../assets/Image.png";
import growthPerson2 from "../assets/Image (1).png";

export default function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8ffe0] to-[#dfe8ff]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* =====================================================
            BLOCK 1
        ===================================================== */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-md">
            <h2 className="text-2xl font-extrabold leading-[1.15] text-slate-900 sm:text-3xl">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="mt-5 text-[10px] leading-5 text-slate-500 sm:text-[11px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path, we have the resources you need.
            </p>

            {/* STATS */}
            <div className="mt-6 flex items-start gap-7">
              <div>
                <p className="text-xl font-extrabold text-blue-600">12K</p>
                <p className="mt-1 text-[8px] text-slate-400">Students</p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-blue-600">70+</p>
                <p className="mt-1 text-[8px] text-slate-400">Courses</p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-blue-600">16</p>
                <p className="mt-1 text-[8px] text-slate-400">Creators</p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto h-[390px] w-full max-w-[480px]">
            {/* Course card */}
            <div className="absolute left-[5%] top-[5px] z-20 w-[180px] overflow-hidden rounded-xl bg-white shadow-lg sm:w-[205px]">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
                alt="Course"
                className="h-[105px] w-full object-cover"
              />

              <div className="p-2">
                <p className="text-[8px] font-bold text-slate-800">
                  Learn Figma from Basic
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[7px] text-slate-400">12 Lessons</span>
                  <span className="text-[7px] text-slate-400">4.5 ★</span>
                </div>

                <p className="mt-2 text-[9px] font-bold text-blue-600">$25</p>
              </div>
            </div>

            {/* Person */}
            <img
              src={growthPerson}
              alt="Student learning"
              className="absolute bottom-0 left-1/2 z-30 h-[330px] w-auto max-w-none -translate-x-1/2 object-contain"
            />

            {/* Learning progress */}
            <div className="absolute right-[3%] top-[125px] z-40 w-[115px] rounded-xl bg-white p-3 shadow-lg sm:w-[130px]">
              <p className="text-[7px] font-medium text-slate-500">
                Learning Progress
              </p>

              <p className="mt-1 text-xl font-extrabold text-slate-900">55%</p>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[55%] rounded-full bg-lime-300" />
              </div>
            </div>

            {/* Green squiggle */}
            <div className="absolute right-[-5px] top-[155px] z-50 rotate-[15deg]">
              <div className="h-3 w-14 rounded-full bg-lime-300" />
              <div className="-mt-1 h-3 w-12 rounded-full bg-lime-300" />
              <div className="-mt-1 h-3 w-14 rounded-full bg-lime-300" />
            </div>
          </div>
        </div>

        {/* =====================================================
            BLOCK 2
        ===================================================== */}
        <div className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          {/* LEFT VISUAL */}
          <div className="relative order-2 mx-auto h-[400px] w-full max-w-[470px] lg:order-1">
            {/* Revenue card */}
            <div className="absolute left-[3%] top-[40px] z-40 w-[100px] rounded-lg bg-blue-600 p-2 text-white shadow-lg">
              <p className="text-[6px]">Total Revenue</p>

              <p className="mt-1 text-[11px] font-bold">$120.29</p>
            </div>

            {/* Course card */}
            <div className="absolute left-[3%] top-[115px] z-40 w-[100px] rounded-lg bg-blue-600 p-2 text-white shadow-lg">
              <p className="text-[6px]">Your Profit</p>

              <p className="mt-1 text-[11px] font-bold">$1,200.38</p>
            </div>

            {/* Person */}
            <img
              src={growthPerson2}
              alt="Creator managing courses"
              className="absolute bottom-0 left-1/2 z-30 h-[350px] w-auto max-w-none -translate-x-1/2 object-contain"
            />

            {/* Happy students card */}
            <div className="absolute bottom-[45px] right-[3%] z-50 rounded-xl bg-white px-3 py-2 shadow-lg">
              <p className="text-[7px] font-medium text-slate-500">
                Happy Students
              </p>

              <div className="mt-1 flex items-center gap-1">
                <div className="flex -space-x-1">
                  <span className="h-5 w-5 rounded-full border border-white bg-orange-200" />
                  <span className="h-5 w-5 rounded-full border border-white bg-blue-200" />
                  <span className="h-5 w-5 rounded-full border border-white bg-purple-200" />
                </div>

                <span className="rounded-full bg-lime-300 px-1.5 py-1 text-[6px] font-bold">
                  24+
                </span>
              </div>
            </div>

            {/* Green squiggle */}
            <div className="absolute right-[8%] top-[105px] z-50 rotate-[15deg]">
              <div className="h-3 w-14 rounded-full bg-lime-300" />
              <div className="-mt-1 h-3 w-12 rounded-full bg-lime-300" />
              <div className="-mt-1 h-3 w-14 rounded-full bg-lime-300" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 max-w-md lg:order-2">
            <h2 className="text-2xl font-extrabold leading-[1.15] text-slate-900 sm:text-3xl">
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p className="mt-5 text-[10px] leading-5 text-slate-500 sm:text-[11px]">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            {/* CHECK LIST */}
            <div className="mt-5 space-y-3">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[9px] text-slate-700"
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[8px] font-bold text-white">
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
