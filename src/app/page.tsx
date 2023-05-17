"use client";

import Link from "next/link";
import HeaderComponent from "../components/Header";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
      <HeaderComponent />
      <div className="relative h-[60px] md:h-[72px]"></div>
      <div className="max-w-7xl mx-auto w-full p-8 xl:px-24 flex flex-col gap-y-8">
        <p className="py-16 text-gray-600 text-[20px] leading-relaxed font-normal max-w-xl">
          Software Engineer with a passion for building delightful user
          interfaces. Front-end focused, but full-stack capable.
        </p>
        <p className="text-base text-gray-600 font-normal max-w-xl">
          Selected projects
        </p>
        <div className="flex flex-col gap-y-6 pb-[72px]">
          <div className="max-h-[800px] flex aspect-video h-full w-full">
            <div className="bg-[#F7F7FA] flex h-full w-full rounded-lg p-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{
                  duration: 0.95,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                className="flex h-full w-full"
              >
                <Image
                  src="/marketing/LiftoffDashboard.webp"
                  alt="Liftoff Dashboard"
                  height={1501}
                  width={1920}
                  className="rounded-lg w-full object-contain"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base text-gray-600 font-normal">2023</p>
            <div className="flex flex-col gap-y-1">
              <p className="text-lg text-black font-semibold">
                Liftoff — Experiential Demo
              </p>
              <p className="text-base text-gray-600 font-normal max-w-3xl">
                Moving the {`"`}ah-ha{`"`} moment closer to the user. Built with
                NextJS and TailwindCSS. Transcoding with FFmpeg, transcription
                with Whisper, feedback with OpenAI.
              </p>
              <div className="pt-4 flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  />
                </svg>

                <Link
                  href="https://demo.useliftoff.com/"
                  target="_blank"
                  className="underline text-base text-gray-600 font-normal"
                >
                  View live demo
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 pb-[72px]">
          <div className="max-h-[800px] flex aspect-video h-full w-full">
            <div className="bg-[#F7F7FA] flex h-full w-full rounded-lg p-8">
              <Image
                src="/marketing/LiftoffWebApp.webp"
                alt="Liftoff Web App"
                height={1551}
                width={1920}
                className="rounded-lg w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base text-gray-600 font-normal">2023</p>
            <div className="flex flex-col gap-y-1">
              <p className="text-lg text-black font-semibold">
                Liftoff — AI Feedback Platform
              </p>
              <p className="text-base text-gray-600 font-normal max-w-3xl">
                Full-stack web application for AI feedback on mock tech
                interviews. Built with NextJS/TailwindCSS/Postgres and Redis for
                rate-limiting.
              </p>
              <div className="pt-4 flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  />
                </svg>

                <Link
                  href="https://useliftoff.com/"
                  target="_blank"
                  className="underline text-base text-gray-600 font-normal"
                >
                  View the site
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 pb-[72px]">
          <div className="max-h-[800px] flex aspect-video h-full w-full">
            <div className="bg-[#F7F7FA] flex h-full w-full rounded-lg p-8">
              <Image
                src="/marketing/BundlDashboard.webp"
                alt="Bundl Dashboard"
                height={1551}
                width={1920}
                className="rounded-lg w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base text-gray-600 font-normal">2021</p>
            <div className="flex flex-col gap-y-1">
              <p className="text-lg text-black font-semibold">
                Bundl Marketing
              </p>
              <p className="text-base text-gray-600 font-normal max-w-3xl">
                Influencer marketplace with a total audience reach of 50+
                million users. Built with Ruby/Postgres/Redis. Project included
                100+ screens, custom RubyGems, Machine Learning for
                recommendations.
              </p>
              <div className="pt-4 flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  />
                </svg>

                <Link
                  href="https://drive.google.com/drive/u/0/folders/1OGRi1s1pMQ0cmhMYMPl0yJNI5Yt3c3fG"
                  target="_blank"
                  className="underline text-base text-gray-600 font-normal"
                >
                  See more images
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 py-32">
          <p className="text-base text-gray-600 font-normal max-w-xl">
            Thanks for checking my portfolio out!
          </p>
          <p className="text-base text-gray-600 font-normal max-w-xl">
            You can find reach me at{" "}
            <span className="underline">
              {" "}
              <Link href="mailto:tameyer41@gmail.com">
                tyler@useliftoff.com
              </Link>
            </span>{" "}
            if you{`'`}d like to get in touch.
          </p>
        </div>
      </div>
    </main>
  );
}
