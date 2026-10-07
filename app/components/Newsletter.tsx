export default function Newsletter() {
  return (
    <section className="bg-white px-6 py-14 text-center md:px-10 md:py-20">
      <h2 className="text-2xl font-bold text-[#03032f] md:text-3xl">
        Subscribe to our newsletter
      </h2>

      <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[#03032f]">
        We recommend you to subscribe to our newsletter, drop
        your email below to get daily update about us
      </p>

      <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 md:mt-14 md:flex-row md:gap-5">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 rounded-full bg-gray-100 px-6 py-4 text-sm outline-none md:px-8"
        />

        <button className="rounded-full bg-green-600 px-10 py-4 text-sm text-white hover:bg-green-700">
          Subscribe
        </button>
      </div>
    </section>
  );
}