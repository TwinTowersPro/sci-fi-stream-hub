import { useState, useMemo } from "react";
import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import MovieModal from "@/components/MovieModal";
import { movies, categories, getMoviesByCategory, searchMovies, type Category, type Movie } from "@/data/movies";

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const heroMovie = movies[0]; // Interstellar

  const filteredContent = useMemo(() => {
    if (searchQuery) {
      return { type: "search" as const, results: searchMovies(searchQuery) };
    }
    if (activeCategory) {
      return { type: "category" as const, results: getMoviesByCategory(activeCategory), label: activeCategory };
    }
    return { type: "browse" as const };
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-background relative">
      <Starfield />
      <Navbar
        onSearch={setSearchQuery}
        onCategorySelect={setActiveCategory}
        activeCategory={activeCategory}
      />

      {/* Main content */}
      <div className="relative z-10">
        {filteredContent.type === "browse" ? (
          <>
            <HeroBanner movie={heroMovie} onPlay={setSelectedMovie} />
            <div className="py-6">
              {categories.map((cat) => (
                <MovieRow
                  key={cat}
                  title={cat}
                  movies={getMoviesByCategory(cat)}
                  onMovieClick={setSelectedMovie}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="pt-28 md:pt-32 px-6 md:px-12 max-w-[1400px] mx-auto">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 neon-text-cyan">
              {filteredContent.type === "search"
                ? `Results for "${searchQuery}"`
                : filteredContent.label}
            </h2>
            {filteredContent.results.length === 0 ? (
              <p className="text-muted-foreground">No movies found.</p>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-4">
                {filteredContent.results.map((movie, i) => (
                  <div key={movie.id} className="cursor-pointer" onClick={() => setSelectedMovie(movie)}>
                    <div className="group relative overflow-hidden rounded-lg aspect-[2/3] glass-card transition-all duration-300 hover:neon-glow-cyan hover:scale-105">
                      <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-display text-[10px] md:text-xs font-semibold text-foreground leading-tight">{movie.title}</p>
                        <p className="text-[9px] text-muted-foreground">{movie.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

export default Index;
