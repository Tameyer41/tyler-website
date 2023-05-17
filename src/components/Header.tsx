"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

let scrollThreshold = [0, 50];

export default function HeaderComponent() {
  let { scrollY } = useViewportScroll();
  let scrollYOnDirectionChange = useRef(scrollY.get());
  let lastPixelsScrolled = useRef<number>(0);
  let lastScrollDirection = useRef<string>("down");
  let pixelsScrolled = useMotionValue(0);
  let border = useTransform(pixelsScrolled, scrollThreshold, [0, 1]);
  let borderColor = useTransform(pixelsScrolled, scrollThreshold, [
    "rgba(250 250 249 / 0)",
    "rgba(243 244 246 / 1)",
  ]);

  let logoHeight = useTransform(pixelsScrolled, scrollThreshold, [33, 30]);
  let backgroundOpacity = useTransform(
    pixelsScrolled,
    scrollThreshold,
    [1, 0.4]
  );
  let borderOpacity = useTransform(pixelsScrolled, scrollThreshold, [0, 1]);
  let backgroundColorTemplate = useMotionTemplate`rgba(250 250 249 / ${backgroundOpacity})`;

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;

      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      let scrollDirection = isScrollingDown ? "down" : "up";
      let currentPixelsScrolled = pixelsScrolled.get();
      let newPixelsScrolled;

      if (lastScrollDirection.current !== scrollDirection) {
        lastPixelsScrolled.current = currentPixelsScrolled;
        scrollYOnDirectionChange.current = latest;
      }

      if (isScrollingDown) {
        newPixelsScrolled = Math.min(
          lastPixelsScrolled.current +
            (latest - scrollYOnDirectionChange.current),
          scrollThreshold[1]
        );
      } else {
        newPixelsScrolled = Math.max(
          lastPixelsScrolled.current -
            (scrollYOnDirectionChange.current - latest),
          scrollThreshold[0]
        );
      }

      pixelsScrolled.set(newPixelsScrolled);
      lastScrollDirection.current = scrollDirection;
    });
  }, [pixelsScrolled, scrollY]);

  return (
    <motion.header
      style={{
        borderColor,
        borderBottomWidth: border,
        backgroundColor: backgroundColorTemplate,
      }}
      className="fixed inset-0 z-50 h-16 md:h-[72px] flex font-soehne items-center bg-white"
    >
      <nav className="relative bg-white/90 backdrop-blur-[22px] backdrop-filter duration-200 h-full w-full items-center flex">
        <div className="max-w-7xl mx-auto flex flex-row w-full items-center justify-between px-8 xl:px-24">
          <Link href="/" className="text-lg font-semibold text-black">
            Tyler Meyer
          </Link>
          <div className="flex flex-row items-center justify-center gap-x-8">
            <Link
              href="https://github.com/Tameyer41"
              target="_blank"
              className="text-[15px] font-normal text-gray-600"
            >
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/tylermeyer41/"
              target="_blank"
              className="text-[15px] font-normal text-gray-600"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
