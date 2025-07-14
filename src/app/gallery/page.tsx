"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { galleryImages } from "@/constants";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(galleryImages[newIndex].id);
  };

  const selectedImageData = selectedImage
    ? galleryImages.find((img) => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-12 md:pt-16 xl:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete collection showcasing organic fertilizer
            production, sustainable farming practices, and the positive impact
            on agriculture worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square">
                <Image
                  src={`/images/gallery/${image.id}.jpg`}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-xs line-clamp-2">
                    {image.description}
                  </p>
                </div>

                <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  #{image.id}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="relative aspect-video">
                <Image
                  src={`/images/gallery/${selectedImage}.jpg`}
                  alt={selectedImageData.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImageData.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {selectedImageData.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Image {selectedImage} of {galleryImages.length}
                  </span>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    #{selectedImage}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
