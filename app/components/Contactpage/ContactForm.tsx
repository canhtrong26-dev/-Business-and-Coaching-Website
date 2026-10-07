export default function ContactForm() {
  return (
    <section className="bg-white px-6 py-12 text-center md:px-10 md:py-20">
      <h1 className="text-4xl font-bold text-[#03032f] md:text-5xl">
        Contact Us
      </h1>

      <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        consectetur justo quis euismod vehicula.
      </p>

      <form className="mx-auto mt-10 flex max-w-xl flex-col gap-6 md:mt-12">
        <input
          type="text"
          placeholder="Your full name"
          className="rounded-xl bg-gray-100 px-6 py-4 text-sm outline-none"
        />

        <input
          type="email"
          placeholder="Your email address"
          className="rounded-xl bg-gray-100 px-6 py-4 text-sm outline-none"
        />

        <textarea
          placeholder="Write a note about your request"
          rows={6}
          className="resize-none rounded-xl bg-gray-100 px-6 py-4 text-sm outline-none"
        />

        <button
          type="submit"
          className="rounded-xl bg-green-600 px-6 py-4 text-sm text-white transition hover:bg-green-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}