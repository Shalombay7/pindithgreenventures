export function Hero() {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-earth-800/60 sm:bg-transparent sm:bg-gradient-to-r sm:from-earth-800/80 sm:to-earth-800/20"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Welcome to
            <strong className="sm:block font-extrabold text-pindith-500">
              PinDith Green Ventures.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white/90 sm:text-xl sm:leading-relaxed">
            Your trusted source for premium quality rabbits and poultry, raised with care and passion.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a href="#products" className="block w-full rounded bg-pindith-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-pindith-700 focus:outline-none focus:ring active:bg-pindith-500 sm:w-auto">
              Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}