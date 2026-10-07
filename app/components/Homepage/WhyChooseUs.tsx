export default function WhyChooseUs() {
    return (
        <section className="bg-white px-6 py-14 md:px-16 md:py-20">

            <div className="mb-10 text-center md:mb-16">
                <h2 className="text-[#1B2A4A] text-3xl font-bold mb-4 md:text-4xl">
                    The Perfect Solution to your<br className="hidden md:block" />Relationship Issues
                </h2>

                <p className="text-gray-600 max-w-[600px] mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

                <div className="border border-gray-200 rounded-xl p-6 md:p-8">
                    <div className="w-16 h-16 mb-6">
                        <img
                            src="/ring-icon.png"
                            alt="icon"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <h3 className="text-[#1B2A4A] text-xl font-bold mb-4">
                        Pre Marital Coaching
                    </h3>

                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.
                    </p>

                    <button className="border-2 border-[#1B2A4A] text-[#1B2A4A] px-6 py-2 rounded-full text-sm hover:bg-[#1B2A4A] hover:text-white transition">
                        Learn More
                    </button>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 md:p-8">
                    <div className="w-16 h-16 mb-6">
                        <img
                            src="/ring-icon.png"
                            alt="icon"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <h3 className="text-[#1B2A4A] text-xl font-bold mb-4">
                        Post Marital Coaching
                    </h3>

                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.
                    </p>

                    <button className="border-2 border-[#1B2A4A] text-[#1B2A4A] px-6 py-2 rounded-full text-sm hover:bg-[#1B2A4A] hover:text-white transition">
                        Learn More
                    </button>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 md:p-8">
                    <div className="w-16 h-16 mb-6">
                        <img
                            src="/ring-icon.png"
                            alt="icon"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <h3 className="text-[#1B2A4A] text-xl font-bold mb-4">
                        Virtual Coaching
                    </h3>

                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.
                    </p>

                    <button className="border-2 border-[#1B2A4A] text-[#1B2A4A] px-6 py-2 rounded-full text-sm hover:bg-[#1B2A4A] hover:text-white transition">
                        Learn More
                    </button>
                </div>

            </div>
        </section>
    );
}