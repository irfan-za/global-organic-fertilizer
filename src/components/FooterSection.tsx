"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FooterSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 mr-2" />,
      title: "Address",
      details: [
        "Gelaran, Sobokerto, Kec. Ngemplak,",
        "Kabupaten Boyolali, Jawa Tengah 57375",
      ],
      color: "text-red-500",
      href: "https://maps.app.goo.gl/RD694w3RPbjafdRA8",
    },
    {
      icon: <Phone className="w-6 h-6 mr-2" />,
      title: "Phone",
      details: ["(+62) 895802778484"],
      color: "text-green-500",
      href: "https://wa.me/62895802778484",
    },
    {
      icon: <Mail className="w-6 h-6 mr-2" />,
      title: "Email",
      details: ["globalorganicfertilizer234@gmail.com"],
      color: "text-blue-500",
      href: "mailto:globalorganicfertilizer234@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6 mr-2" />,
      name: "Instagram",
      href: "https://www.instagram.com/globalorganicfertilizer",
      color: "text-pink-500",
    },
    {
      icon: <Facebook className="w-6 h-6 mr-2" />,
      name: "Facebook",
      href: "https://www.facebook.com/share/19M9uvSwdv/",
      color: "text-blue-600",
    },
    {
      icon: <Youtube className="w-6 h-6 mr-2" />,
      name: "YouTube",
      href: "https://youtube.com/@globalorganicfertilizer",
      color: "text-red-600",
    },
    {
      icon: <Twitter className="w-6 h-6 mr-2" />,
      name: "X",
      href: "https://x.com/globalorga38485",
      color: "text-blue-700",
    },
    {
      icon: <Linkedin className="w-6 h-6 mr-2" />,
      name: "LinkedIn",
      href: "#",
      color: "text-sky-600",
    },
  ];

  return (
    <footer id="contact" className="bg-gray-900/80 text-white relative">
      <Image
        src="/images/bg-footer.jpg"
        alt="Footer Background"
        className="absolute inset-0 object-cover w-full h-full -z-10"
        fill
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get in touch with us to learn more about our organic fertilizers
              and sustainable farming solutions
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 w-full md:w-fit"
            >
              {contactInfo.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2 flex ">
                    {item.icon} {item.title}
                  </h3>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="cursor-pointer hover:underline hover:text-primary"
                  >
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-300 leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </Link>
                </div>
              ))}
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <div className="flex">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`flex items-center p-3 ${social.color} hover:text-primary-foreground`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 py-4"
      >
        <p className="text-gray-400 text-center ">
          © {new Date().getFullYear()} Global Organic Fertilizer. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
