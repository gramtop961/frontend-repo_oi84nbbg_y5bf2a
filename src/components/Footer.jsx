import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="w-full border-t border-gray-200/40 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-gray-600">
        <p className="inline-flex items-center gap-1">
          Built with
          <Heart className="h-4 w-4 text-rose-500" />
          using React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
