import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PaymentDue({
  isBlocked = true,
}) {
  const [open, setOpen] = useState(isBlocked);

  useEffect(() => {
    setOpen(isBlocked);
  }, [isBlocked]);

  const requestId = useMemo(() => {
    return `invoice::${Math.random().toString(36).substring(2, 10)}-${Math.random()
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white text-xl sm:text-2xl font-bold"
          >
            Payment Required
          </motion.p>

          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-lg leading-relaxed">
            Access to this service has been restricted due to an unpaid balance.
            An outstanding payment must be settled before access can be restored.
          </p>

          <p className="mt-3 text-sm text-white/60 max-w-md">
            Once payment is completed and confirmed, service access will automatically resume.
          </p>

          <div className="absolute bottom-6 text-xs text-white/40 tracking-wide">
            Invoice Reference: {requestId}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}