const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Finance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courses = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    title: "Learn Figma from Basic",
    author: "by Sarah Ahmed",
    rating: "4.5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    title: "Build Digital Asset",
    author: "by Alex Morgan",
    rating: "4.5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    title: "The Power of Big Data",
    author: "by Michael Lee",
    rating: "4.5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    title: "Balancing Productivity on...",
    author: "by Sarah Wilson",
    rating: "4.5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    title: "Mastering Money Manage...",
    author: "by James Miller",
    rating: "4.5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    title: "From Idea to Startup Succ...",
    author: "by Emma Davis",
    rating: "4.5",
  },
];

const learningPaths = [
  {
    title: "Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 3a9 9 0 1 0 9 9h-9V3Z" strokeWidth="2" />
        <path d="M12 3a9 9 0 0 1 9 9h-9V3Z" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "IT & Software",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="14" rx="2" strokeWidth="2" />
        <path d="M8 21h8M12 18v3" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Business",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="5" width="16" height="15" rx="2" strokeWidth="2" />
        <path d="M8 9h8M8 13h8M8 17h5" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 12h5l7-5v10l-7-5H4v0Z" strokeWidth="2" />
        <path d="M7 16v3M18 9l2-2M18 15l2 2" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Photography",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 7h4l1.5-2h5L16 7h4v12H4V7Z" strokeWidth="2" />
        <circle cx="12" cy="13" r="3.5" strokeWidth="2" />
      </svg>
    ),
  },
];

function CourseCard({ course }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Course image */}
      <div className="relative h-[125px] overflow-hidden bg-slate-100">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />

        {/* Small image overlay */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-[7px] text-white">
          <span>12 Lessons</span>
          <span>•</span>
          <span>2h 15m</span>
        </div>

        <div className="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-1 text-[7px] text-white">
          Beginner
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="min-w-0 truncate text-[11px] font-bold text-slate-900">
            {course.title}
          </h3>

          <span className="shrink-0 text-[9px] text-slate-400">
            {course.rating} ★
          </span>
        </div>

        <p className="mt-1 text-[8px] text-slate-400">{course.author}</p>

        <div className="mt-2 flex items-center justify-between">
          {/* Students */}
          <div className="flex items-center">
            <div className="flex -space-x-1.5">
              <span className="h-4 w-4 rounded-full border border-white bg-orange-200" />
              <span className="h-4 w-4 rounded-full border border-white bg-blue-200" />
              <span className="h-4 w-4 rounded-full border border-white bg-purple-200" />
              <span className="h-4 w-4 rounded-full border border-white bg-green-200" />
            </div>

            <span className="ml-1 text-[7px] text-slate-400">+24</span>
          </div>

          {/* Price */}
          <div>
            <span className="text-[10px] font-bold text-blue-600">$25</span>
            <span className="ml-1 text-[7px] text-slate-400">/course</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CourseSection() {
  return (
    <section className="bg-white">
      {/* =====================================================
          DISCOVER COURSES
      ===================================================== */}
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[9px] leading-4 text-slate-400 sm:text-[10px]">
            At Bytespace, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from
            technology to the arts, and make a difference in your career and
            life.
          </p>
        </div>

        {/* Categories */}
        <div className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`rounded-full px-3 py-1 text-[7px] font-medium transition ${
                index === 0
                  ? "bg-lime-300 text-slate-900"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}

          <button
            type="button"
            className="rounded-full bg-slate-100 px-3 py-1 text-[7px] font-medium text-blue-600"
          >
            + More
          </button>
        </div>

        {/* Course Grid */}
        <div className="mx-auto mt-7 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        {/* =====================================================
            LEARNING PATHS
        ===================================================== */}
        <div className="mx-auto mt-14 max-w-4xl text-center">
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[9px] leading-4 text-slate-400 sm:text-[10px]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of course types spans various fields,
            ensuring there&apos;s something for everyone. Unlock your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* Learning path cards */}
        <div className="mx-auto mt-7 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {learningPaths.map((path) => (
            <button
              key={path.title}
              type="button"
              className="group flex h-[85px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-lime-300 hover:shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300 text-slate-900 transition group-hover:scale-105">
                <span className="h-4 w-4">{path.icon}</span>
              </span>

              <span className="mt-2 text-[9px] font-medium text-slate-800">
                {path.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
