import { Star } from 'lucide-react';

const features = [
  {
    title: 'Fast & Modern',
    desc: 'Vite + React for instant feedback and a smooth developer experience.',
  },
  {
    title: 'Beautiful by Default',
    desc: 'Tailwind CSS gives you elegant, responsive styles out of the box.',
  },
  {
    title: 'Ready to Grow',
    desc: 'Structured components that scale as your project evolves.',
  },
];

export default function FeatureList() {
  return (
    <section id="features" className="mx-auto max-w-5xl px-4 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-gray-200/60 bg-white/60 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/40"
          >
            <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 p-2 text-white shadow">
              <Star className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
