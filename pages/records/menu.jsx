import Link from 'next/link';
import { useRouter } from 'next/router';


export default function MenuPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-indigo-100 via-white to-indigo-50 text-gray-800 overflow-hidden">
      
      {/* SVG decorativ fundal */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path fill="#c3bffa" d="M46.6,-65.7C59.3,-55.5,68.2,-39.7,71.1,-23.5C74.1,-7.3,71.2,9.4,63.7,22.7C56.3,36.1,44.3,46,30.8,54.6C17.3,63.2,2.3,70.6,-13.7,73.2C-29.7,75.8,-46.7,73.7,-60.2,64.5C-73.6,55.3,-83.6,38.9,-86.5,21.2C-89.4,3.6,-85.1,-15.4,-74.6,-29.3C-64.2,-43.2,-47.7,-51.9,-32.1,-60.6C-16.6,-69.3,-8.3,-78.1,5.5,-85C19.4,-91.8,38.7,-96,46.6,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Conținut central în card */}
      <main className="flex flex-col items-center justify-center text-center px-10 py-42 z-20 relative">
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-2xl w-full space-y-10 animate-fade-in">
          
          <div className="div-meniu">
            <h1 className="text-5xl font-extrabold text-indigo-700 drop-shadow-md mb-4">
              Meniul Principal
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bine ai venit! Alege una dintre opțiunile de mai jos pentru a gestiona biblioteca ta.
            </p>
          </div>

          {/* Butoane */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8"> 
            <Link href="/records/create">
              <button className="btn-adauga-carte">
                📚 Adaugă carte
              </button>
            </Link>

            <Link href="/books">
              <button className="btn-editeaza-carte">
                🛠️ Editează lista de cărți
              </button>
            </Link>
          </div>

          {/* Buton Înapoi */}
          <button
            onClick={() => router.back()}
            className="btn-inapoi"
          >
            🔙 Înapoi
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 border-t border-gray-200 bg-white shadow-inner z-10 relative">
        <p>© 2025 Eduard's Library. Toate drepturile rezervate.</p>
      </footer>
    </div>
  );
}
