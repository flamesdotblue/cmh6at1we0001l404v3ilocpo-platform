import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";

export default function Hero({ onSearch, categories = [], category, onCategoryChange }) {
  const [localQuery, setLocalQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(localQuery);
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1610030469763-2a01c9a313be?q=80&w=1974&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.1) contrast(1.05)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block mb-3 text-rose-700 bg-rose-100/70 px-3 py-1 rounded-full text-xs font-medium">
              Festive Collection 2025
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
              Discover Handwoven Indian Sarees
            </h1>
            <p className="mt-4 text-neutral-700 max-w-prose">
              From regal Banarasi to timeless Kanjivaram, shop curated sarees crafted by master weavers across India. Drapes that celebrate tradition with contemporary charm.
            </p>

            <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                <input
                  value={localQuery}
                  onChange={(e) => setLocalQuery(e.target.value)}
                  placeholder="Search for 'Banarasi', 'pink', 'handloom'..."
                  className="w-full pl-10 pr-3 h-12 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white/90"
                />
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={category}
                  onChange={(e) => onCategoryChange?.(e.target.value)}
                  className="h-12 rounded-xl border border-neutral-200 bg-white/90 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-rose-300"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors"
                >
                  Explore
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-600" /> 100% authentic handloom
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Free shipping above ₹999
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-rose-100 bg-white/60 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98c9aac0c2d1?q=80&w=1200&auto=format&fit=crop"
                alt="Banarasi silk saree display"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl border border-rose-100 p-4 hidden sm:flex flex-col w-48">
              <div className="text-xs text-neutral-500">Featured</div>
              <div className="font-semibold">Banarasi Royale</div>
              <div className="text-rose-600 font-medium">₹9,599</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
