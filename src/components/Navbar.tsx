import { useState } from "react";
import { Search, X } from "lucide-react";
import { categories, type Category } from "@/data/movies";

interface NavbarProps {
  onSearch: (query: string) => void;
  onCategorySelect: (category: Category | null) => void;
  activeCategory: Category | null;
}

const Navbar = ({ onSearch, onCategorySelect, activeCategory }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border/20">
      <div className="max-w-[1400px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <h1
            className="font-display text-2xl md:text-3xl font-bold text-primary neon-text-cyan cursor-pointer shrink-0"
            onClick={() => { onCategorySelect(null); handleSearch(""); setSearchOpen(false); }}
          >
            MOVS
          </h1>

          {/* Categories - hidden on small screens */}
          <div className="hidden md:flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategorySelect(activeCategory === cat ? null : cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary/20 text-primary neon-glow-cyan"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 shrink-0">
            {searchOpen ? (
              <div className="flex items-center gap-2 animate-scale-in">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search movies..."
                  className="bg-muted/50 border border-glass-border/30 rounded-lg px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-40 md:w-56"
                  autoFocus
                />
                <button onClick={() => { setSearchOpen(false); handleSearch(""); }} className="text-muted-foreground hover:text-foreground">
                  <X size={18} />
                </button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="text-muted-foreground hover:text-primary transition-colors">
                <Search size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile categories */}
        <div className="flex md:hidden items-center gap-1.5 mt-2 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategorySelect(activeCategory === cat ? null : cat)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground bg-muted/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
