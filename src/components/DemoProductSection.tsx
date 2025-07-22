"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const DemoProductSection = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoId = "lnLHRM2etwA";

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Product Demo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            watch how we create our quality products.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            {!playVideo ? (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={handlePlayVideo}
              >
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="Sahabahmu App Demo Thumbnail"
                  className="object-cover rounded-2xl"
                  fill
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-white/90 shadow-lg flex items-center justify-center"
                  >
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            ) : (
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
                  title="Sahabahmu App Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoProductSection;
