"use client";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Home() {
  const audioRef = useRef(null);
  useEffect(() => {
  const startMusic = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
    } catch (err) {
      console.log(err);
    }

    window.removeEventListener("mousemove", startMusic);
  };

  window.addEventListener("mousemove", startMusic);

  return () => {
    window.removeEventListener("mousemove", startMusic);
  };
}, []);
  const cursorRef = useRef(null);

  const [loadingStage, setLoadingStage] = useState(0);
  const fullName = "DIVYA BOYAT";

// LOADER

useEffect(() => {
  const timers = [
   setTimeout(() => setLoadingStage(1), 2200),
   setTimeout(() => setLoadingStage(2), 3000),
   setTimeout(() => setLoadingStage(3), 3600),
  ];

  return () => timers.forEach(clearTimeout);
}, []);

// LENIS SCROLL
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

requestAnimationFrame(raf);
  }, []);

// CURSOR
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

window.addEventListener("mousemove", moveCursor);

return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

if (loadingStage !== 3) {
  return (
    <div className="h-screen bg-gradient-to-br from-[#ffe0c3] via-[#ffc6d0] to-[#c9f0ff] flex items-center justify-center text-black overflow-hidden relative">

      {/* STAGE 1 */}
      {loadingStage === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center px-6"
        >
          <div className="flex flex-wrap justify-center gap-4 text-4xl md:text-7xl tracking-[6px] font-light">

            {["DEVELOP", "THE", "FUTURE", "WITH"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.5 }}
              >
                {word}
              </motion.span>
            ))}

          </div>
        </motion.div>
      )}

      {/* STAGE 2 */}
      {loadingStage === 1 && (
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-[120px] tracking-[18px] font-thin"
        >
          DIVA
        </motion.h1>
      )}

      {/* STAGE 3 */}
      {loadingStage === 2 && (
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "20px" }}
          transition={{ duration: 1.5 }}
          className="text-5xl md:text-[100px] font-thin"
        >
          AKA
        </motion.h1>
      )}

    </div>
  );
}

return (
    <main className="bg-gradient-to-br from-[#ffe0c3] via-[#ffc6d0] to-[#c9f0ff] text-black overflow-x-hidden relative z-10">

  {/* LOCATION */}
  <div className="fixed top-4 left-4 z-50 text-[10px] text-black-400 bg-white/40 px-3 py-1 rounded-full backdrop-blur font-mono">
   India, GGN | 28.4595° N, 77.0266° E
</div>

      {/* BACKGROUND EFFECTS */}
<div className="fixed inset-0 -z-10 overflow-hidden">

  {/* PREMIUM PARTICLES */}
{[...Array(50)].map((_, i) => (
  <motion.div
    key={i}
    animate={{
      opacity: [0.2, 0.8, 0.2],
      y: [0, -20, 0],
    }}
    transition={{
      duration: Math.random() * 5 + 3,
      repeat: Infinity,
      delay: Math.random() * 5,
    }}
    className="absolute rounded-full bg-white"
    style={{
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      filter: "blur(1px)",
      boxShadow: "0 0 12px rgba(255,255,255,0.8)",
    }}
  />
))}

  {/* PURPLE BLOB */}
  <motion.div
    animate={{
      x: [0, 100, -50, 0],
      y: [0, -50, 50, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
  />

  {/* CYAN BLOB */}
  <motion.div
    animate={{
      x: [0, -80, 40, 0],
      y: [0, 60, -40, 0],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
  />

  {/* PINK BLOB */}
  <motion.div
    animate={{
      x: [0, 60, -60, 0],
      y: [0, -40, 30, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
  />

</div>
{/* MUSIC */}
      <audio ref={audioRef} loop>
  <source src="/music.mp3" type="audio/mp3" />
</audio>

{/* CURSOR */}
      <div
        ref={cursorRef}
        style={{
         mixBlendMode: "screen",
      }}
        className="fixed w-64 h-64 rounded-full bg-cyan-400/30 blur-[120px] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />

{/* GRID */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:60px_60px]" />

{/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-20">

{/* MUSIC BUTTON */}
        <button
  onClick={async () => {
    if (!audioRef.current) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } catch (err) {
      console.log(err);
    }
  }}
  className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
>
  🎵 Music
</button>

<h1 className="flex flex-wrap justify-center text-6xl md:text-[140px] font-thin tracking-[2px] overflow-hidden">

  {/* DIVYA */}
  {"DIVYA".split("").map((letter, index) => (
    <motion.span
      key={index}
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
      }}
      className="inline-block"
    >
      {letter}
    </motion.span>
  ))}

  {/* SPACE */}
  <span className="mx-3"></span>

  {/* BOYAT */}
  {"BOYAT".split("").map((letter, index) => (
    <motion.span
      key={index + 100}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.5 + index * 0.08,
        duration: 0.7,
      }}
      className="inline-block"
    >
      {letter}
    </motion.span>
  ))}

</h1>

<motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-gray-500 tracking-[5px] mt-6"
        >
          WEB DEVELOPER • AI ENTHUSIAST
        </motion.p>

<div className="flex gap-4 mt-10 flex-wrap justify-center">

<a href="/resume.pdf" target="_blank">
            <button className="border border-gray-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Resume
            </button>
          </a>

<a href="#projects">
            <button className="border border-gray-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Projects
            </button>
          </a>

<a href="#contact">
            <button className="border border-gray-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Let’s Talk
            </button>
          </a>

</div>

</section>
{/* MARQUEE */}
      <section className="py-16 overflow-hidden border-y border-gray-900">

        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex whitespace-nowrap text-4xl text-gray-700 gap-20"
        >
          <span>React</span>
          <span>Next.js</span>
          <span>JavaScript</span>
          <span>AI</span>
          <span>Python</span>
          <span>Tailwind</span>
          <span>UI/UX</span>
          <span>GitHub</span>
          <span>MySQL</span>
          <span>React</span>
          <span>Next.js</span>
          <span>JavaScript</span>
        </motion.div>

      </section>

      {/* TERMINAL */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 flex justify-center"
      >

        <div className="w-full max-w-4xl bg-gradient-to-br from-[#ffe0c3] via-[#ffc6d0] to-[#c9f0ff] border border-gray-800 rounded-3xl p-8 shadow-2xl">

          <p className="text-green-500 mb-4">
            divya@portfolio:~$
          </p>

          <div className="space-y-4 text-black-400">

            <p>{">"} whoami</p>
            <p className="text-black">Divya Boyat</p>

            <p>{">"} skills</p>
            <p className="text-black">
              React • Next.js • JavaScript • Python • AI
            </p>

            <p>{">"} goal</p>
            <p className="text-black">
              Building aesthetic and immersive digital experiences.
            </p>

          </div>

        </div>

      </motion.section>


{/* TECH STACK */}
      <section className="py-20 px-6 relative z-20">

<h2 className="text-center text-4xl mb-16 text-black-300">
          Tech Stack
        </h2>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

{[
            {
              title: "Languages",
              items: ["JavaScript", "Python", "HTML", "CSS"],
            },
            {
              title: "Technologies",
              items: ["React", "Next.js", "Tailwind", "Node.js"],
            },
            {
              title: "Tools",
              items: ["GitHub", "VS Code", "MySQL", "Figma"],
            },
          ].map((section, i) => (

<motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="border border-black-800 rounded-3xl p-8 bg-black/5 backdrop-blur-xl"
            >

<h3 className="text-2xl mb-8 text-black">
                {section.title}
              </h3>

<div className="flex flex-wrap gap-3">

{section.items.map((item, idx) => (

<span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-gray-700 text-black-400 hover:border-white transition"
                  >
                    {item}
                  </span>

))}

</div>

</motion.div>

))}

</div>

</section>

{/* PROJECTS */}
      <section
        id="projects"
        className="py-32 px-6 relative z-20"
      >

<h2 className="text-center text-4xl mb-16 text-black-300">
          Projects
        </h2>

<div className="flex flex-wrap justify-center gap-8">

{[
            {
              title: "AI Mental Health Chatbot",
              desc: "An AI chatbot designed for emotional support and interaction.",
            },
            {
              title: "Animated Portfolio",
              desc: "A cinematic portfolio built using Next.js and Framer Motion.",
            },
          ].map((project, i) => (

<motion.div
              key={i}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="w-[340px] border border-gray-800 rounded-3xl p-8 bg-white/5 backdrop-blur-xl"
            >

<h3 className="text-2xl text-black mb-4">
                {project.title}
              </h3>

<p className="text-black-500 leading-8">
                {project.desc}
              </p>

</motion.div>

))}

</div>

</section>

{/* CONTACT */}
      <section
        id="contact"
        className="py-32 text-center px-6 relative z-50"
      >

<h2 className="text-5xl text-black mb-10">
          Contact
        </h2>

<div className="flex justify-center gap-8 text-3xl text-black-500">

<a
            href="mailto:iamdivya224@gmail.com"
            className="hover:text-black transition"
          >
            <FaEnvelope />
          </a>

<a
            href="tel:7982979245"
            className="hover:text-black transition"
          >
            <FaPhone />
          </a>

<a
            href="https://linkedin.com/in/divyaboyat224"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaLinkedin />
          </a>

<a
            href="https://github.com/divyaaaaahhhhh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>

</div>

<p className="mt-12 text-black-700">
          © 2026 Divya Boyat Portfolio
        </p>

</section>
</main>
  );
}
