"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const [showHearts, setShowHearts] = useState(false);
  // const router = useRouter();
  return (
    <div className="p-6 flex-col content-center align-center justify-center">
      <Card>
        <CardContent>
          <div className="flex align-center justify-center">
            <Image
              src={`/images/heart.png`}
              className="image-float"
              width={200}
              height={200}
              alt="Heart"
            />
          </div>
          <h2 className="text-2xl font-semibold text-center">
            Would you be my Valentine?
          </h2>
          <div className="mt-4 flex justify-center">
            <Button onClick={() => setShowHearts(true)}>Yes!</Button>
          </div>
          {showHearts && (
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.img
                  key={i}
                  src="/images/heart.png"
                  className="absolute w-16 h-12"
                  initial={{ y: "300%", opacity: 0 }}
                  animate={{ y: "-200%", opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
