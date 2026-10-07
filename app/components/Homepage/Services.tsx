export default function Services() {
    return (
        <section className="bg-white px-6 py-14 flex flex-col gap-12 items-center md:px-16 md:py-20 md:flex-row md:justify-between">

            <div className="relative">
                <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-lg overflow-hidden">
                    <img
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Services"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="max-w-[550px]">
                <h2 className="text-[#1B2A4A] text-3xl font-bold mb-4">
                    We offer the best services
                </h2>

                <p className="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna.
                </p>

                <div className="flex flex-col gap-3 mb-8">
                    <div className="flex items-center gap-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <span className="text-[#1B2A4A]">Post Marital Coaching</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <span className="text-[#1B2A4A]">Pre Marital Coaching</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <span className="text-[#1B2A4A]">Virtual Coaching</span>
                    </div>
                </div>

                <button className="border-2 border-[#1B2A4A] text-[#1B2A4A] px-8 py-3 rounded-full hover:bg-[#1B2A4A] hover:text-white transition">
                    Book Now
                </button>
            </div>
        </section>
    );
}