export default function Testimonials() {
  return (
    <section className="bg-[#f6fff4] px-6 py-14 md:px-10 md:py-20">
      <h2 className="mx-auto mb-10 max-w-md text-center text-2xl font-bold text-[#03032f] md:mb-16 md:text-3xl">
        What our customers say about us
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">ChiChi</p>
              <p className="text-sm text-gray-400">South Africa</p>
            </div>
            <span className="text-2xl text-green-600">❞</span>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui,
            imperdiet et.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Queen Rita</p>
              <p className="text-sm text-gray-400">USA</p>
            </div>
            <span className="text-2xl text-green-600">❞</span>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui,
            imperdiet et.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Gloria Uko</p>
              <p className="text-sm text-gray-400">Nigeria</p>
            </div>
            <span className="text-2xl text-green-600">❞</span>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui,
            imperdiet et.
          </p>
        </div>

      </div>
    </section>
  );
}