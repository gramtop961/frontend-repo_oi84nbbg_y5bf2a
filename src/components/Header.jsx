import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200/40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Hello World App</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#hello" className="hover:text-gray-900 transition-colors">Hello</a>
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}
