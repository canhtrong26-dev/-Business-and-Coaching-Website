import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white px-6 py-4 flex items-center justify-between md:px-16">
            <div className="text-green-600 text-xl font-bold">
                Jo-Jean<br />Imoh-Ita
            </div>

            <div className="flex items-center gap-4 md:gap-8">
                <div className="flex gap-4 text-sm text-[#1B2A4A] md:gap-8 md:text-base">
                    <Link className="hover:text-blue-500" href="/" >Home</Link>
                    <Link className="hover:text-blue-500" href="/about">About</Link>
                    <Link className="hover:text-blue-500" href="/services">Services</Link>
                </div>

                <Link
                    href="/contact"
                    className="border-2 border-green-500 text-green-500 px-4 py-2 rounded-full text-sm hover:bg-green-500 hover:text-white transition md:px-6 md:text-base"
                >
                    Contact Us
                </Link>
            </div>
        </nav>
    );
}