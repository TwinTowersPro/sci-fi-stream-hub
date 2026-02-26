import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getVidsrcUrl, type Movie } from "@/data/movies";

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  return (
    <AnimatePresence>
      {movie && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl glass-card neon-glow-cyan overflow-hidden rounded-xl z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-glass-border/20">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{movie.title}</h3>
                <p className="text-xs text-muted-foreground">{movie.year} · {movie.category.join(" · ")}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            {/* Player */}
            <div className="relative w-full aspect-video bg-background">
              <iframe
                src={getVidsrcUrl(movie.id)}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="autoplay; encrypted-media"
                referrerPolicy="origin"
                title={movie.title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MovieModal;
