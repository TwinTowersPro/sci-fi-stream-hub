import { motion } from "framer-motion";
import type { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
  index: number;
}

const MovieCard = ({ movie, onClick, index }: MovieCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={() => onClick(movie)}
      className="group relative flex-shrink-0 w-[140px] md:w-[180px] cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg aspect-[2/3] glass-card transition-all duration-300 group-hover:neon-glow-cyan group-hover:scale-105">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-display text-xs font-semibold text-foreground leading-tight">{movie.title}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">{movie.year}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
