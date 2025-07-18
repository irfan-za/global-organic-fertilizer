"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/constants";

const ProductSection = () => {
  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Product
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.slice(0, 3).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <Card
                className={`h-full bg-card border-border border hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-full h-40  md:h-48 flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg relative`}
                  >
                    <Image
                      src={`/images/gallery/${product.id}.jpg`}
                      alt={product.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 text-center">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-1 ">
                  <CardDescription className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
                      asChild
                    >
                      <Link href={`/products/${product.id}`}>See details</Link>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="/products">
                See All Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
