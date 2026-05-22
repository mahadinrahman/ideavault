"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, MessageCircle, Star } from "lucide-react";
import Link from "next/link";


const Feature1 = () => {
   const stats = [
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      number: "12K+",
      title: "Ideas Shared",
      desc: "Creative startup concepts posted by innovators.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "8.5K+",
      title: "Active Users",
      desc: "Entrepreneurs, students, and developers worldwide.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      number: "25K+",
      title: "Discussions",
      desc: "Meaningful feedback and collaborative conversations.",
    },
    {
      icon: <Star className="w-8 h-8 text-pink-600" />,
      number: "4.8★",
      title: "Community Rating",
      desc: "Loved by creators and startup enthusiasts.",
    },
  ];


    return (
        <div>
             <section className="relative w-full py-24 overflow-hidden">
      
      {/* Background Blur Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium ">
            Growing Startup Community
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-fuchsia-900 leading-tight">
            Empowering Innovators <br />
            Around the World 🌍
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            IdeaVault helps creators share ideas, receive feedback,
            and build better startup concepts through community-driven collaboration.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-100/40 to-blue-100/40 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative z-10">
                
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-100 mb-6 mx-auto">
                  {item.icon}
                </div>

                <h3 className="text-4xl text-center font-extrabold text-fuchsia-900 leading-tight">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-center text-xl font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="mt-3 text-center text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link href={'/register'}><button className="px-8 py-4 rounded-2xl bg-fuchsia-900  text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300">
            Join The Innovation Hub 🚀
          </button></Link>
        </motion.div>
      </div>
    </section>
        </div>
    );
};

export default Feature1;