"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import CaseStudyCard from "./animata/card/case-study-card";

interface Publication {
  title: string;
  description: string;
  color: string;
  path: string;
    image: string;
}

interface PublicationCardProps {
  data?: Publication[];
}

const PublicationCard: React.FC<PublicationCardProps> = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return (
      <div className="w-full py-20 text-center text-neutral-500 dark:text-neutral-400">
        No publications available.
      </div>
    );
  }

  return (
    <section className="w-full py-10 px-4 md:px-12 lg:px-20 dark:to-neutral-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card
              className={cn(
                "rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-neutral-200 bg-slate text-dark"
              )}
            >
              {/* Top Section – your custom component */}
              <div className="relative w-full h-48 flex items-center justify-center">
            <CaseStudyCard image={item.image}
  link={item.path}
  type="simple-image" />
              </div>

              {/* Description Section */}
              <CardContent className="p-6 flex flex-col justify-between min-h-[160px]">
                <div>
                  <h3 className="text-lg font-semibold text-dark ">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.path}
                  className={cn(
                    "mt-4 inline-block text-sm font-medium text-white px-4 py-2 rounded-md shadow transition-all duration-300 hover:scale-105",
                    item.color
                  )}
                >
                  Explore Journal
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PublicationCard;
