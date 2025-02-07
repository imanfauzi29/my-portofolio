"use client"

import Link from "next/link"
import Magnetic from "@/components/ui/Magnetic"
import { motion } from "framer-motion"
import { CursorWrapper } from "@/components/ui/CustomCursor"
import ButtonAnimateSlide from "@/components/button/ButtonAnimateSlide"
import { FaWhatsapp } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import { ImLinkedin } from "react-icons/im"
import { BsMedium } from "react-icons/bs"
import { SiBlogger } from "react-icons/si"

const animation = {
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "linear",
  },
  style: {
    backgroundImage:
      "linear-gradient(45deg, #ff00ff, #00ffff, #ffcc00, #ff00ff)",
    backgroundSize: "200% 200%",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  },
}

export default function ContactSection() {
  return (
    <section className="flex h-screen items-center justify-center overflow-hidden p-10 md:p-22">
      <div className="flex h-full w-full flex-col">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-fit flex-1 text-5xl leading-tight font-semibold text-wrap text-white md:text-8xl lg:text-9xl"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="font-kanit tracking-wide"
          >
            Get in touch
          </motion.h1>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <Magnetic>
              <CursorWrapper type="button">
                <Link href="mailto:contact@ifauzi.space">
                  <motion.h1
                    className="font-kanit relative flex flex-wrap tracking-wide"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={{
                      rest: { backgroundPosition: "0% 50%", color: "white" },
                      hover: {
                        ...animation.animate,
                        color: "transparent",
                      },
                    }}
                    transition={animation.transition}
                    style={animation.style}
                  >
                    contact
                    <motion.span
                      className="font-kanit"
                      animate={animation.animate}
                      transition={animation.transition}
                      style={animation.style}
                    >
                      @
                    </motion.span>
                    ifauzi.space
                  </motion.h1>
                </Link>
              </CursorWrapper>
            </Magnetic>
          </motion.div>
        </motion.div>

        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <div className="flex flex-col gap-4 md:flex-row">
              <motion.div
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                viewport={{ amount: 0.4 }}
              >
                <ButtonAnimateSlide
                  text="contact@ifauzi.space"
                  url="mailto:contact@ifauzi.space"
                  icon={MdOutlineMailOutline}
                  target="_blank"
                />
              </motion.div>
              <motion.div
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                transition={{
                  ease: "linear",
                  damping: 5,
                  stiffness: 50,
                  delay: 0.2,
                }}
                viewport={{ amount: 0.4 }}
              >
                <ButtonAnimateSlide
                  text="+62 851 7345 4506"
                  url="https://wa.me/6285173454506"
                  icon={FaWhatsapp}
                  target="_blank"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <ButtonAnimateSlide
              text="imanfauzi29"
              url="https://linkedin.com/in/imanfauzi29"
              icon={ImLinkedin}
              target="_blank"
            />
            <ButtonAnimateSlide
              text="@imanfauzi29"
              url="https://medium.com/@imanfauzi29"
              icon={BsMedium}
              target="_blank"
            />
            <ButtonAnimateSlide
              text="Blogger"
              url="https://teknogadget7.blogspot.com/"
              icon={SiBlogger}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
