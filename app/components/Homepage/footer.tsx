export default function Footer() {
  return (
    <footer className="bg-[#03032f] px-6 py-12 text-white md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">

       

        <div>
          <h2 className="text-xl font-bold">Jo-Jean Imoh-Ita</h2>
          <p className="mt-4 text-sm text-gray-300">
            88/89 Peter Odili Road, Port Harcourt, Rivers State.
          </p>
        </div>

     
        <div className="flex gap-16 text-sm text-gray-300 md:gap-20">
          <div className="space-y-5">
            <p className="hover:text-yellow-500">Home</p>
            <p className="hover:text-yellow-500">About</p>
            <p className="hover:text-yellow-500">Sign Up</p>
          </div>

          <div className="space-y-5">
            <p className="hover:text-yellow-500">Services</p>
            <p className="hover:text-yellow-500">Contact</p>
            <p className="hover:text-yellow-500">Privacy Policy</p>
          </div>
        </div>

       
        <div>
          <p className="mb-6 text-sm">Connect With Us</p>

          <div className="flex gap-5 text-lg">
            <span>/X</span>
            <span>/◎</span>
            <span>/f</span>
            <span>/in</span>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-xs text-gray-400 md:mt-16">
        © Jo-Jean Imoh-Ita. All right reserved. Designed by AMANI Art
      </p>
    </footer>
  );
}