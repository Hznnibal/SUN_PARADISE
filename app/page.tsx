import { Clock, Facebook, Instagram, MapPin, Phone, Sparkles, Star, Sun } from 'lucide-react';
import Image from 'next/image';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80"
            alt="Nail Salon Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-500/70"></div>
        </div>

        <div className="relative text-center text-white z-10 px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="w-10 h-10 text-yellow-300" />
            <h1 className="text-6xl font-bold">Sun Paradise</h1>
          </div>
          <p className="text-2xl font-light mt-4 max-w-2xl mx-auto">
            Votre destination bien-être pour des ongles parfaits
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-900 mb-16">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Manucure UV",
                image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80",
                price: "À partir de 35€"
              },
              {
                title: "Pédicure Spa",
                image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80",
                price: "À partir de 45€"
              },
              {
                title: "Nail Art",
                image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80",
                price: "À partir de 15€"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1920}
                  height={1080}
                  className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">{service.title}</h3>
                  <p className="text-pink-600 font-medium">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-purple-600" />,
                title: "Équipement Premium",
                description: "Machines UV dernière génération"
              },
              {
                icon: <Star className="w-8 h-8 text-pink-600" />,
                title: "Excellence",
                description: "Personnel hautement qualifié"
              },
              {
                icon: <Sun className="w-8 h-8 text-yellow-500" />,
                title: "Hygiène Garantie",
                description: "Stérilisation UV avancée"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-purple-900 mb-8">Contactez-nous</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-pink-600" />
                  <p className="text-lg">01 23 45 67 89</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-pink-600" />
                  <p className="text-lg">123 Avenue des Soins, Paris</p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-pink-600" />
                  <p className="text-lg">Mar-Sam: 10h-19h</p>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href="#" className="text-purple-900 hover:text-pink-600">
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-purple-900 hover:text-pink-600">
                    <Facebook className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
                <button className="w-full bg-purple-900 text-white py-3 rounded-lg hover:bg-purple-800 transition-colors">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="w-6 h-6 text-yellow-300" />
            <h3 className="text-2xl font-bold">Sun Paradise</h3>
          </div>
          <p className="text-purple-200">© 2024 Sun Paradise. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;