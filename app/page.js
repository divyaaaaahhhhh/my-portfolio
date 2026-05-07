"use client";

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
  const cursorRef = useRef(null);

const [loading, setLoading] = useState(true);

const fullName = "DIVYA BOYAT";

// LOADER
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

return () => clearTimeout(timer);
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

if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl tracking-[12px] font-thin"
          >
            LOADING PORTFOLIO
          </motion.h1>

<motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-gray-500 tracking-[6px]"
          >
            OF
          </motion.p>
        </motion.div>
      </div>
    );
  }

return (
    <main className="bg-black text-white overflow-x-hidden relative z-10">
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
          className="mb-12 border border-gray-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          🎵 Music
        </button>

{/* LETTER BY LETTER NAME */}
        <h1 className="text-6xl md:text-[140px] font-thin tracking-[10px] flex flex-wrap justify-center">
          {fullName.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
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

        <div className="w-full max-w-4xl bg-[#0d0d0d] border border-gray-800 rounded-3xl p-8 shadow-2xl">

          <p className="text-green-500 mb-4">
            divya@portfolio:~$
          </p>

          <div className="space-y-4 text-gray-400">

            <p>{">"} whoami</p>
            <p className="text-white">Divya Boyat</p>

            <p>{">"} skills</p>
            <p className="text-white">
              React • Next.js • JavaScript • Python • AI
            </p>

            <p>{">"} goal</p>
            <p className="text-white">
              Building aesthetic and immersive digital experiences.
            </p>

          </div>

        </div>

      </motion.section>


{/* TECH STACK */}
      <section className="py-20 px-6 relative z-20">

<h2 className="text-center text-4xl mb-16 text-gray-300">
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
              className="border border-gray-800 rounded-3xl p-8 bg-white/5 backdrop-blur-xl"
            >

<h3 className="text-2xl mb-8 text-white">
                {section.title}
              </h3>

<div className="flex flex-wrap gap-3">

{section.items.map((item, idx) => (

<span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 hover:border-white transition"
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

<h2 className="text-center text-4xl mb-16 text-gray-300">
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

<h3 className="text-2xl text-white mb-4">
                {project.title}
              </h3>

<p className="text-gray-500 leading-8">
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

<h2 className="text-5xl text-white mb-10">
          Contact
        </h2>

<div className="flex justify-center gap-8 text-3xl text-gray-500">

<a
            href="mailto:iamdivya224@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>

<a
            href="tel:7982979245"
            className="hover:text-white transition"
          >
            <FaPhone />
          </a>

<a
            href="https://linkedin.com/in/divyaboyat224"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>

<a
            href="https://github.com/divyaaaaahhhhh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

</div>

<p className="mt-12 text-gray-700">
          © 2026 Divya Boyat Portfolio
        </p>

</section>
</main>
  );
}
