import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vercel from "../assets/vercel.png";

export default function GlobalServiceBlocker({
  isBlocked = true,
}) {
  const [open, setOpen] = useState(isBlocked);

  useEffect(() => {
    setOpen(isBlocked);
  }, [isBlocked]);


  const requestId = useMemo(() => {
    return Math.random().toString(36).substring(2, 12);
  }, []);

const timestamp = useMemo(() => {
  return new Intl.DateTimeFormat("en-SG", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}, []);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Soft Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

          <motion.div
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-[92%] max-w-md rounded-2xl border border-white/10 bg-neutral-950 px-10 py-12 text-center shadow-2xl"
          >
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img
                src={Vercel}
                alt="Vercel Logo"
                className="h-9 w-auto object-contain"
              />
            </div>

            {/* Status Pill */}
            <div className="mb-6 flex justify-center">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] tracking-wide text-neutral-400 backdrop-blur">
                Edge Network
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              503: Service Unavailable
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              This deployment is currently restricted.
              <br />
              Please contact your service provider for assistance.
            </p>
            {/* Divider */}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Status Block */}
            <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>Status</span>
                <span className="text-white">503</span>
              </div>

              <div className="mt-2 flex justify-between">
                <span>Region</span>
                <span className="text-white">Global Edge</span>
              </div>

              <div className="mt-2 flex justify-between">
                <span>Deployment</span>
                <span className="text-white">Unavailable</span>
              </div>
            </div>

            {/* Request Meta */}
            <div className="mt-6 text-[11px] text-neutral-600 space-y-1">
              <div>Request ID: {requestId}</div>
              <div>{timestamp} SGT</div>
            </div>

            {/* Footer */}
            <p className="mt-6 text-xs text-neutral-600">
              Vercel Edge Network
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}