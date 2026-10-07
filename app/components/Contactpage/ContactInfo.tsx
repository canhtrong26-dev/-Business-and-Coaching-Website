export default function ContactInfo() {
  return (
    <section className="bg-[#f6fff4] px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 md:flex-row md:justify-center md:gap-12">
        <div className="flex-1 rounded-2xl bg-white p-8 text-center shadow-lg">
          <h2 className="text-xl font-bold text-[#03032f]">
            Get in Touch
          </h2>

          <div className="mt-6 space-y-5 text-left text-sm text-[#03032f]">
            <p>
              <span className="mr-3 text-green-600">✉</span>
              glorynwokacha99@gmail.com
            </p>

            <p>
              <span className="mr-3 text-green-600">☎</span>
              +234 806 774 735
            </p>
          </div>
        </div>

        <div className="flex-1 rounded-2xl bg-white p-8 text-center shadow-lg">
          <h2 className="text-xl font-bold text-[#03032f]">
            Location
          </h2>

          <p className="mt-6 text-left text-sm leading-6 text-[#03032f]">
            <span className="mr-3 text-green-600">●</span>
            88/89 Peter Odili Road, Port Harcourt, Rivers State.
          </p>
        </div>
      </div>
    </section>
  );
}