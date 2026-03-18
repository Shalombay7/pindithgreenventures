export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <a className="flex items-center gap-2" href="/">
            <img className="h-8 w-auto" src="/logo.svg" alt="PinDith Green Ventures Logo" />
            <span className="font-bold text-white">PinDith Green Ventures</span>
          </a>
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear} PinDith Green Ventures. All rights reserved.</p>
            <p>
              Designed by{' '}
              <a
                href="https://wa.me/233542447318"
                target="_blank"
                rel="noreferrer"
                className="text-pindith-300 hover:text-pindith-200"
              >
                Shalombay7
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
