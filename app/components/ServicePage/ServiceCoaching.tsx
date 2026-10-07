export default function ServiceCoaching() {
  return (
    <section className="bg-[#f6fff4] px-6 py-14 md:px-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="h-[300px] w-[300px] overflow-hidden rounded-[40%] md:h-[400px] md:w-[400px]">
          <img
            src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Marriage Coaching"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="max-w-[550px]">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-[#03032f] md:text-4xl">
            We Provide Post & Pre
            <br />
            Marital Coaching
          </h2>

          <p className="text-sm leading-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui,
            imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare
            blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris,
            ultricies eu urna at, gravida commodo mauris. Quisque ac felis eu
            sapien dictum gravida aliquet ac purus.
          </p>
        </div>
      </div>
    </section>
  );
}