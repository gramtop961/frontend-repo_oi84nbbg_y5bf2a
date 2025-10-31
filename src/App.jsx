import Header from './components/Header';
import HelloCard from './components/HelloCard';
import FeatureList from './components/FeatureList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header />
      <main>
        <HelloCard />
        <FeatureList />
      </main>
      <Footer />
    </div>
  );
}
