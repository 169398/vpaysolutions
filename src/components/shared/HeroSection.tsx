"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Powering Africa&apos;s Digital Economy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Build, scale, and manage your payments infrastructure across Africa
            with our unified platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12"
            />
            <Button size="lg" className="h-12">
              Start now →
            </Button>
          </div>
        </motion.div>

        {/* Right column - Visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl p-1">
            <div className="bg-black/5 backdrop-blur-xl rounded-2xl p-8">
              {/* Abstract payment visualization */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600" />
                  <div className="w-32 h-8 rounded-full bg-gradient-to-r from-pink-600 to-blue-500" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-full rounded-full bg-gradient-to-r from-orange-500/50 to-pink-600/50" />
                  <div className="h-3 w-4/5 rounded-full bg-gradient-to-r from-pink-600/50 to-blue-500/50" />
                  <div className="h-3 w-2/3 rounded-full bg-gradient-to-r from-blue-500/50 to-orange-500/50" />
                </div>
                <div className="pt-4 flex justify-end">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-orange-500" />
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-8 right-12 w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-pink-600/20 backdrop-blur-md"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-12 left-12 w-24 h-24 rounded-full bg-gradient-to-br from-pink-600/20 to-blue-500/20 backdrop-blur-md"
          />
        </motion.div>
      </div>
    </div>
  );
}
