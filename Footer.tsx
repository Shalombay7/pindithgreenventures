export function Footer() {
  const currentYear = new Date().getFullYear();
  const shareUrl = encodeURIComponent('https://pindithgreenventures.onrender.com');
  const shareText = encodeURIComponent('PinDith Green Ventures - Premium Rabbits & Kebab');

  return (
    <footer className="bg-earth-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <a className="flex items-center gap-2" href="/">
            <img className="h-8 w-auto" src="/logo.svg" alt="PinDith Green Ventures Logo" />
            <span className="font-bold text-white">PinDith Green Ventures</span>
          </a>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wide text-gray-400">Share</span>
            <a
              href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on WhatsApp"
              className="text-gray-300 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
                <path d="M19.11 17.54c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.61.14-.18.28-.7.89-.86 1.07-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.36-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.28-.95.93-.95 2.27 0 1.34.98 2.63 1.12 2.82.14.18 1.93 2.95 4.68 4.13.66.28 1.18.45 1.58.58.66.21 1.26.18 1.74.11.53-.08 1.63-.66 1.86-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.53-.32z"/><path d="M16 3C9.38 3 4 8.1 4 14.38c0 2.47.86 4.76 2.3 6.6L5 28l7.26-2.27c1.62.85 3.46 1.34 5.48 1.34 6.62 0 12-5.1 12-11.38S22.62 3 16 3zm0 21.1c-1.86 0-3.59-.5-5.06-1.36l-.36-.21-4.3 1.35 1.39-3.96-.24-.4c-1.25-1.98-1.98-4.32-1.98-6.77C5.45 9.3 10.2 4.8 16 4.8c5.8 0 10.55 4.5 10.55 10.05S21.8 24.1 16 24.1z"/>
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on Facebook"
              className="text-gray-300 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M13 9h4V6h-4c-2.21 0-4 1.79-4 4v3H6v3h3v8h3v-8h3l1-3h-4v-3c0-.55.45-1 1-1z"/>
              </svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on X"
              className="text-gray-300 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M18.24 2.25h3.16l-6.9 7.88 8.12 11.62h-6.36l-4.98-7.06-6.19 7.06H2.92l7.38-8.43L2.47 2.25h6.51l4.5 6.36 5.76-6.36zm-1.11 17.5h1.75L7.95 4.03H6.12l10.99 15.72z"/>
              </svg>
            </a>
          </div>
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
