"use client";

import { toast } from "sonner";

declare global {
  interface Window {
    Tawk_API?: {
      maximize?: () => void;
      onLoad?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

/**
 * Reusable function to initialize and/or open the Tawk.to chat widget.
 *
 * Usage in a component:
 *
 * import { openTawkChat } from '@/utils/tawk';
 *
 * <button onClick={openTawkChat}>Chat with us</button>
 */
export const openTawkChat = () => {
  if (typeof window === "undefined") return;

  // If Tawk_API is already available and initialized, just open the window
  if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
    window.Tawk_API.maximize();
    return;
  }

  // Create a toast ID to manage the loading state
  const toastId = toast.loading("جاري الاتصال بالدعم...");

  // If the script hasn't been loaded yet, initialize it
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  // Set the onLoad callback to maximize the window once the script is ready
  window.Tawk_API.onLoad = function () {
    toast.success("تم الاتصال بالدعم بنجاح!", { id: toastId });
    if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
      window.Tawk_API.maximize();
    }
  };

  // Create and inject the Tawk.to script
  const s1 = document.createElement("script");
  const s0 = document.getElementsByTagName("script")[0];

  s1.async = true;
  s1.src = "https://embed.tawk.to/69a3344abdcdef1c334034a2/1jiio8hav";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");

  // Handle script load errors
  s1.onerror = () => {
    toast.error("فشل تحميل محادثة الدعم. يرجى المحاولة مرة أخرى لاحقًا.", {
      id: toastId,
    });
  };

  if (s0 && s0.parentNode) {
    s0.parentNode.insertBefore(s1, s0);
  } else {
    document.head.appendChild(s1);
  }
};
