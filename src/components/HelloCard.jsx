import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function HelloCard() {
  const [count, setCount] = useState(0);

  return (
    <section id="hello" className="mx-auto max-w-5xl px-4 py-16">
      <div className="relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/60 p-8 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/40">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-50 via-transparent to-violet-50" />
        <div className="relative flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Welcome</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Hello, World!
          </h1>
          <p className="max-w-prose text-gray-600">
            You just launched a beautiful starter powered by React and Tailwind CSS. Click the button to interact.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 px-4 py-2 text-white shadow hover:from-indigo-500 hover:to-violet-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              Click me
            </button>
            <span className="text-sm text-gray-600">Clicks: <span className="font-semibold text-gray-900">{count}</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
