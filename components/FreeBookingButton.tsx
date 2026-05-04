"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FreeBookingButton() {
  const [hasClaimed, setHasClaimed] = useState(false);

  useEffect(() => {
    // Simple cookie check
    const checkCookie = () => {
      const claimed = document.cookie
        .split("; ")
        .find((row) => row.startsWith("free_booking_claimed="));
      setHasClaimed(!!claimed);
    };

    checkCookie();

    // Also listen for potential changes (if user books in another tab)
    window.addEventListener("focus", checkCookie);
    return () => window.removeEventListener("focus", checkCookie);
  }, []);

  if (hasClaimed) {
    return (
      <Button
        variant="ghost"
        disabled
        className="text-muted-foreground italic text-xs"
      >
        {"لقد استفدت من الحصة المجانية هذا الشهر"}
      </Button>
    );
  }

  return (
    <Button
      variant="secondary"
      className="bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20"
      asChild
    >
      <Link href="https://calendly.com/quranikbooking/new-meeting">
        <GraduationCap className="ml-2 h-4 w-4" />
        {"حصة تجريبية مجانية"}
      </Link>
    </Button>
  );
}
