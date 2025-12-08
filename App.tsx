import { Header } from './Header';
import { Hero } from './Hero';
import { Products } from './Products';
import { Footer } from './Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;