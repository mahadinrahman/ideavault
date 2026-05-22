"use client";

import { motion } from "framer-motion";
import { Lightbulb, LightbulbIcon, MessageCircle, Rocket } from "lucide-react";

const Feature2 = () => {
     const steps = [
    {
      icon: <LightbulbIcon className="w-8 h-8 text-yellow-500" />,
      title: "Share Your Idea",
      desc: "Post your startup idea and let the world see your creativity.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: "Get Feedback",
      desc: "Users comment, discuss, and help you improve your idea.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      title: "Go Trending",
      desc: "Best ideas rise to the top based on engagement.",
    },
  ];
    return (
        <div>
              <section className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-900 leading-tight">
          How IdeaVault Works ⚡
        </h2>
        <p className="text-gray-500 mt-2">
          Simple 3-step process to bring ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto ">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-md border hover:shadow-xl transition text-center"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl text-center font-bold mb-2 text-fuchsia-900 leading-tight">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default Feature2;