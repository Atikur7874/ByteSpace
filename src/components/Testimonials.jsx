const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "https://i.pravatar.cc/100?img=47",
    text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "https://i.pravatar.cc/100?img=12",
    text: "I've used several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "https://i.pravatar.cc/100?img=11",
    text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly and the support from the community is incredible. It's helped me reach more learners and share my knowledge with others.",
  },
];

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-blue-600"
      aria-hidden="true"
    >
      <path d="M7.2 5C4.88 5 3 6.88 3 9.2c0 2.08 1.48 3.78 3.43 4.13-.35 1.6-1.24 2.88-2.68 3.82l1.12 1.35c2.64-1.46 4.33-4.04 4.33-7.4V5H7.2Zm10 0C14.88 5 13 6.88 13 9.2c0 2.08 1.48 3.78 3.43 4.13-.35 1.6-1.24 2.88-2.68 3.82l1.12 1.35c2.64-1.46 4.33-4.04 4.33-7.4V5H17.2Z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8ffe5] to-[#e5eaff]">
      {/* SOFT BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[380px] w-[600px] -translate-x-1/2 rounded-full bg-lime-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* HEADER */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="max-w-sm text-2xl font-extrabold leading-[1.15] text-slate-900 sm:text-3xl">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div className="max-w-lg">
            <p className="text-[10px] leading-5 text-slate-500 sm:text-[11px]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* USER */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-9 w-9 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[10px] font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-[8px] text-blue-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* QUOTE */}
              <div className="mt-4">
                <QuoteIcon />

                <p className="mt-2 text-[9px] leading-5 text-slate-500">
                  {testimonial.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
