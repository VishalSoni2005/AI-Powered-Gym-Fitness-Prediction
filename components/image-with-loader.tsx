"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type ImageWithLoaderProps = ImageProps & {
  className?: string;
};

export function ImageWithLoader({ className, ...props }: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Skeleton Loader */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-600 border-t-cyan-500" />
        </div>
      )}

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          {...props}
          className={className}
          onLoadingComplete={() => setLoaded(true)}
        />
      </motion.div>
    </div>
  );
}
