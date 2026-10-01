const partners = [
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
];

export default function PartnerLogos() {
  return (
    <section className="border-b border-slate-100 bg-white py-7">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:justify-between">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm font-semibold text-slate-400"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              </span>

              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
