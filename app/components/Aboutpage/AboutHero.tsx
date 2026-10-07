export default function AboutHero() {
  return (
    <section className="bg-white px-6 py-12 md:px-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="max-w-[550px]">
          <h1 className="mb-6 text-4xl font-bold text-[#03032f] md:text-5xl">
            Jean Joe - FOUNDER
          </h1>

          <p className="mb-6 text-sm leading-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui,
            imperdiet et hendrerit in, accumsan tempus erat.
          </p>

          <p className="mb-6 text-sm leading-6 text-gray-600">
            Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed
            justo mauris, ultricies eu urna at, gravida commodo mauris.
            Quisque ac felis eu sapien dictum gravida aliquet ac purus.
          </p>

          <p className="text-sm leading-6 text-gray-600">
            Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed
            justo mauris, ultricies eu urna at, gravida commodo mauris.
            Quisque ac felis eu sapien dictum gravida aliquet ac purus.
          </p>
        </div>

        <div className="h-[300px] w-[300px] overflow-hidden rounded-3xl md:h-[450px] md:w-[400px]">
          <img
            src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Founder"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}