import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalServiceBlocker({
  isBlocked = true,
}) {
  const [open, setOpen] = useState(isBlocked);

  useEffect(() => {
    setOpen(isBlocked);
  }, [isBlocked]);

  const requestId = useMemo(() => {
    return `bom1::${Math.random().toString(36).substring(2, 10)}-${Math.random()
      .toString(36)
      .substring(2, 10)}`;
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white/80 text-lg sm:text-xl font-medium"
          >
            This deployment is temporarily paused
          </motion.p>
          <p className="mt-3 text-sm text-white/50">
            Please contact the site administrator or developer to restore access.
          </p>
          <div className="absolute bottom-6 text-xs text-white/40 tracking-wide">
            {requestId}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}