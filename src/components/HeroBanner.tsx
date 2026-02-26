import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { Movie } from "@/data/movies";

interface HeroBannerProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
}

const HeroBanner = ({ movie, onPlay }: HeroBannerProps) => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover opacity-40 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-16 md:pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3 neon-text-cyan leading-tight">
            {movie.title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-5">
            {movie.year} · {movie.category.join(" · ")}
          </p>
          <button
            onClick={() => onPlay(movie)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.4)] transition-all duration-300 hover:scale-105"
          >
            <Play size={18} fill="currentColor" />
            Watch Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
