import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

const initialProducts = [
  {
    id: 1,
    title: "Banarasi Silk Saree - Ruby Red",
    category: "Banarasi",
    price: 7899,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1610030469983-98c9aac0c2d1?q=80&w=1600&auto=format&fit=crop",
    tag: "New",
    color: "Red",
  },
  {
    id: 2,
    title: "Kanjivaram Silk Saree - Emerald Green",
    category: "Kanjivaram",
    price: 12999,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1610030469763-2a01c9a313be?q=80&w=1600&auto=format&fit=crop",
    tag: "Bestseller",
    color: "Green",
  },
  {
    id: 3,
    title: "Chiffon Saree - Pastel Peach",
    category: "Chiffon",
    price: 3499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1600&auto=format&fit=crop",
    tag: "Lightweight",
    color: "Peach",
  },
  {
    id: 4,
    title: "Cotton Handloom Saree - Indigo",
    category: "Cotton",
    price: 2899,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1583073439336-3f09a86b0b1b?q=80&w=1600&auto=format&fit=crop",
    tag: "Handloom",
    color: "Blue",
  },
  {
    id: 5,
    title: "Banarasi Silk Saree - Royal Blue",
    category: "Banarasi",
    price: 9599,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&w=1600&auto=format&fit=crop",
    tag: "Festive",
    color: "Blue",
  },
  {
    id: 6,
    title: "Georgette Saree - Blush Pink",
    category: "Georgette",
    price: 4199,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1592878835878-ff0b7a66a242?q=80&w=1600&auto=format&fit=crop",
    tag: "Trending",
    color: "Pink",
  },
];

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(initialProducts.map((p) => p.category)))],
    []
  );

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return initialProducts.filter((p) => {
      const matchesQuery = q
        ? [p.title, p.category, p.color, p.tag].some((f) =>
            String(f).toLowerCase().includes(q)
          )
        : true;
      const matchesCategory = category === "All" ? true : p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const handleAddToCart = () => setCartCount((c) => c + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white text-neutral-900">
      <Navbar cartCount={cartCount} />
      <Hero
        onSearch={(val) => setQuery(val)}
        categories={categories}
        category={category}
        onCategoryChange={setCategory}
      />
      <main id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  );
}
