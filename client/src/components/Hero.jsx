// Hero3D.jsx — Corporate-modern light theme hero with integrated Navbar
import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// =================== 3D ELEMENTS =================== //
function ParticleField({ count = 2500, radius = 60 }) {
  const group = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * (0.6 + Math.random() * 0.4);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      arr.set([x, y, z], i * 3);
    }
    return arr;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y += delta * 0.02;
    const targetX = state.mouse.x * 0.3;
    const targetY = -state.mouse.y * 0.2;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetY + t * 0.01,
      0.05
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetX + t * 0.02,
      0.05
    );
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          sizeAttenuation
          color="#60a5fa"
          transparent
          opacity={0.85}
        />
      </points>
    </group>
  );
}

function NeonGrid() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, 0]}>
      <planeGeometry args={[400, 400, 64, 64]} />
      <meshBasicMaterial wireframe color="#3b82f6" transparent opacity={0.1} />
    </mesh>
  );
}

function HoloRing() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x += 0.002;
    ref.current.rotation.y += 0.003;
    const s = 1 + Math.sin(t * 1.2) * 0.04;
    ref.current.scale.set(s, s, s);
  });
  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[2.2, 0.45, 320, 10, 2, 3]} />
        <meshStandardMaterial
          color="#2563eb"
          emissive="#2563eb"
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.25}
        />
      </mesh>
    </Float>
  );
}

// =================== HERO + NAV =================== //
export default function Hero3D() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* ========== Navbar ========== */}
      <nav
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-gray-900 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            AyeshJamadar
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            {navItems.map((item, idx) => (
              <li key={idx} className="relative group">
                <a
                  href={item.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Burger */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer z-[10000]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2 bg-blue-600" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2 bg-blue-600" : ""
              }`}
            ></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden flex flex-col items-center gap-6 py-6 bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-300/30"
          >
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </nav>

      {/* ========== 3D Background ========== */}
      <div className="absolute inset-0 -z-10">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 14], fov: 50 }} gl={{ antialias: true }}>
          <color attach="background" args={["#f9fafb"]} />
          <fog attach="fog" args={["#f9fafb", 20, 100]} />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#2563eb" />
          <pointLight position={[-10, -6, -10]} intensity={0.5} color="#60a5fa" />
          <Stars radius={120} depth={40} count={4000} factor={4} saturation={0} fade speed={0.5} />
          <ParticleField />
          <HoloRing />
          <NeonGrid />
        </Canvas>
      </div>

      {/* ========== Hero Content ========== */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between px-6 py-20 gap-8">
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Hi, I’m <span className="text-blue-600">Ayesh Jamadar</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Full-Stack Developer • Building clean, modern, and professional web experiences
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition shadow"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100 transition shadow"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Avatar Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-64 h-64 rounded-full border-4 border-blue-300 shadow-lg overflow-hidden">
            <img
              src="/images/3.PNG"
              alt="Ayesh Jamadar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.div
          className="text-gray-500 text-sm"
          animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
