import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { StickyCartBar } from './StickyCartBar';
import { HomePage } from './HomePage';
import { ProductDetailPage } from './ProductDetailPage';
import { ScrollToTop } from './ScrollToTop';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const RootLayout = () => (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
      <StickyCartBar onCheckoutClick={() => setIsCartOpen(true)} />
    </>
  );

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'products/:productId', element: <ProductDetailPage /> },
        ],
      },
    ],
    {
      future: { v7_startTransition: true, v7_relativeSplatPath: true },
    }
  );

  return <RouterProvider router={router} />;
}

export default App;