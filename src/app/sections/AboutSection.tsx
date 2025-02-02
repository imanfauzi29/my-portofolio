"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <div className="max-w-3/4 flex items-center gap-20">
        <div className="break-words sticky self-start top-1/3">
          <motion.div
            className="h-full absolute w-2 "
            animate={{
              backgroundColor: [
                "rgb(11, 13, 23)",
                "rgb(25, 29, 49)",
                "rgb(48, 35, 74)",
                "rgb(76, 40, 89)",
                "rgb(11, 13, 23)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <h1 className="text-6xl text-white ml-8 leading-tight">
            {["Turning", "Ideas", "into", "Interface"].map((text) => (
              <span key={text} className="block">
                {text}
              </span>
            ))}
          </h1>
        </div>

        <div className="relative space-y-96 mt-56">
          <div>
            <h3 className="text-white text-5xl font-medium mb-8">
              Introduction
            </h3>
            <motion.p className="text-white font-kanit text-2xl tracking-wide font-light text-balance">
              Hey! Saya Iman Fauzi, seorang Frontend Developer yang suka ngulik
              tampilan web biar gak cuma fungsional, tapi juga enak dipandang.
              Saya fokus di React.js, dan Next.js, plus suka eksperimen dengan
              animasi dan UI/UX biar website terasa lebih hidup.
            </motion.p>
          </div>
          <div className="text-white text-xl tracking-wide font-light text-balance">
            <h2 className=" text-5xl font-medium mb-8">Kenapa Saya?</h2>

            <ul className="space-y-6">
              <li>
                <h5 className="block text-xl font-medium font-kanit">
                  Frontend Freak
                </h5>
                <span className="font-kanit text-gray-300">
                  Ngoding UI bukan cuma kerjaan, tapi juga hobi.
                </span>
              </li>
              <li>
                <h5 className="block text-xl font-medium font-kanit">
                  Pixel Perfect Enthusiast
                </h5>
                <span className="font-kanit text-gray-300">
                  Kalau ada yang miring dikit, auto refactor.
                </span>
              </li>
              <li>
                <h5 className="block text-xl font-medium font-kanit">
                  Fast & Optimized
                </h5>
                <span className="font-kanit text-gray-300">
                  Bukan cuma cepat coding, tapi juga performa website harus
                  kencang! refactor.
                </span>
              </li>
              <li>
                <h5 className="block text-xl font-medium font-kanit">
                  Selalu Belajar
                </h5>
                <span className="font-kanit text-gray-300">
                  Lagi ngulik Docker & Wazuh SIEM, siapa tahu nanti jadi
                  full-stack atau sekalian masuk ke cybersecurity hehe.
                  refactor.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
