export default function Hero() {
    return (
        <section className="bg-white px-6 py-12 flex flex-col gap-12 items-center md:px-16 md:py-20 md:flex-row md:justify-between">
            <div className="max-w-[550px]">
                <h1 className="text-[#1B2A4A] text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Marriage and Relationship Coaching
                </h1>

                <p className="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.
                </p>

                <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition">
                    Book Now
                </button>
            </div>

            <div className="relative">
                <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gray-400 rounded-lg overflow-hidden">
                    <img
                        src="https://images.pexels.com/photos/2422287/pexels-photo-2422287.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Coaching"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute bottom-[-20px] left-[-20px] md:left-[-30px] bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
                    <div className="w-12 h-12 rounded-full border-4 border-green-500 flex items-center justify-center text-sm font-bold">
                        90%
                    </div>

                    <div>
                        <p className="font-bold text-sm">Success</p>
                        <p className="font-bold text-sm">Result</p>
                    </div>
                </div>
            </div>
        </section>
    );
}