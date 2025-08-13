import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageModal = ({ 
  isOpen, 
  onClose, 
  screenshots, 
  currentIndex, 
  onNavigate 
}) => {
  const currentScreenshot = screenshots?.[currentIndex];

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentIndex, screenshots]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < screenshots.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  if (!currentScreenshot) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-full w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2"
              title="Close (Esc)"
            >
              <FaTimes size={24} />
            </button>

            {/* Image counter */}
            <div className="absolute -top-16 left-0 text-white text-sm">
              {currentIndex + 1} of {screenshots.length}
            </div>

            {/* Previous button */}
            {currentIndex > 0 && (
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all z-10"
                title="Previous (←)"
              >
                <FaChevronLeft size={20} />
              </button>
            )}

            {/* Next button */}
            {currentIndex < screenshots.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all z-10"
                title="Next (→)"
              >
                <FaChevronRight size={20} />
              </button>
            )}
            
            {/* Image */}
            <motion.img
              key={currentIndex} // Key prop for smooth transitions between images
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              src={currentScreenshot.url}
              alt={currentScreenshot.caption}
              className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl mx-auto block"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6 rounded-b-lg">
              <p className="text-center text-lg font-medium">{currentScreenshot.caption}</p>
              {screenshots.length > 1 && (
                <p className="text-center text-sm text-gray-300 mt-2">
                  Use arrow keys or click the arrows to navigate
                </p>
              )}
            </div>

            {/* Thumbnail navigation (for projects with many screenshots) */}
            {screenshots.length > 3 && (
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 p-2 rounded-lg">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => onNavigate(index)}
                    className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${
                      index === currentIndex 
                        ? 'border-white' 
                        : 'border-transparent hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={screenshot.url}
                      alt={screenshot.caption}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;