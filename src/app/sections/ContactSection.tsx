"use client";

import Link from "next/link";
import Magnetic from "@/components/ui/Magnetic";
import { motion } from "framer-motion";
import { CursorWrapper } from "@/components/ui/CustomCursor";
import ButtonAnimateSlide from "@/components/button/ButtonAnimateSlide";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { BsMedium } from "react-icons/bs";
import { SiBlogger } from "react-icons/si";

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
};
export default function ContactSection() {
  return (
    <section className="h-screen flex py-22 px-22 justify-center items-center">
      <div className="h-full w-full flex flex-col">
        <div className="flex-1 text-9xl text-white font-semibold leading-tight w-fit">
          <h1 className="font-kanit tracking-wide">Get in touch</h1>
          <Magnetic>
            <CursorWrapper type="button">
              <Link href="mailto:ifauzi@mail.tech">
                <motion.h1
                  className="font-kanit tracking-wide relative"
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
                  ifauzi
                  <motion.span
                    className="font-kanit"
                    animate={animation.animate}
                    transition={animation.transition}
                    style={animation.style}
                  >
                    @
                  </motion.span>
                  mail.tech
                </motion.h1>
              </Link>
            </CursorWrapper>
          </Magnetic>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="flex gap-4">
              <ButtonAnimateSlide
                text="ifauzi@mail.tech"
                url="mailto:ifauzi@mail.tech"
                icon={MdOutlineMailOutline}
                target="_blank"
              />
              <ButtonAnimateSlide
                text="+62 851 7345 4506"
                url="https://wa.me/6285173454506"
                icon={FaWhatsapp}
                target="_blank"
              />
            </div>
          </div>
          <div className="flex gap-4">
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
  );
}
