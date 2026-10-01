import logo from "../assets/Group (1).png";

const footerLinks = {
  "Helpful Links": ["Home", "Features", "Resources", "Pricing", "Design"],
  Development: [
    "Development",
    "Marketing",
    "Photography",
    "Business",
    "Finance",
  ],
  "Resources & Contact": ["All Courses", "Categories", "Help", "About"],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr] lg:gap-20">
          {/* BRAND + NEWSLETTER */}
          <div className="max-w-sm">
            <img
              src={logo}
              alt="ByteSpace"
              className="h-auto w-[90px] object-contain"
            />

            <p className="mt-2 text-[7px] text-slate-500">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* EMAIL FORM */}
            <div className="mt-5 flex max-w-[290px] items-center rounded-full border border-slate-200 bg-white p-1">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[8px] text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                className="shrink-0 rounded-full bg-lime-300 px-4 py-2 text-[8px] font-semibold text-slate-900 transition hover:bg-lime-200"
              >
                Subscribe
              </button>
            </div>

            <p className="mt-3 max-w-[290px] text-[6px] leading-3 text-slate-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* LINK COLUMNS */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-[8px] font-bold text-slate-900">{title}</h3>

                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[7px] text-slate-500 transition hover:text-blue-600"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}
        <div className="mt-10 border-t border-slate-200 pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[7px] text-slate-400">
              © 2023 ByteSpace. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#"
                className="text-[7px] text-slate-400 hover:text-slate-700"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[7px] text-slate-400 hover:text-slate-700"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="text-[7px] text-slate-400 hover:text-slate-700"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
