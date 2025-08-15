"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle, Sprout } from "lucide-react";

const AboutSection = () => {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Reduce the overuse of chemical fertilizers",
      description:
        "🌱 Our organic alternatives help farmers decrease dependency on harmful chemicals",
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title:
        "Promote greener and more environmentally friendly farming practices",
      description:
        "🍀 Supporting sustainable agriculture for a healthier planet",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Improve soil fertility naturally and sustainably",
      description:
        "🌿 Enhance soil health for long-term agricultural productivity",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-800 rounded-2xl p-8 text-white">
              <p className="text-lg leading-relaxed mb-6">
                Our company is engaged in the export of organic fertilizers from
                Indonesia, dedicated to providing eco-friendly products such as
                Rice Husk Charcoal, Vermicompost, and Decomposed Goat Manure.
                All of our products are derived from natural sources to support
                sustainable and productive agriculture.
              </p>

              <p className="text-lg leading-relaxed">
                We recognize that the world is currently facing serious
                challenges due to global warming and environmental degradation.
                That&apos;s why we are committed to being part of the solution.
                Through our organic fertilizers, we aim to:
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg text-green-600 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
