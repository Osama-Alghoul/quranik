"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Home, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

function ConfirmFreeContent() {
  const searchParams = useSearchParams();

  // Extract details from Calendly redirect URL if available
  const eventName = searchParams.get("event_type_name");
  const inviteeName = searchParams.get("invitee_full_name");
  const startTime = searchParams.get("event_start_time");

  useEffect(() => {
    // Set a cookie that expires in 30 days (1 month)
    const now = new Date();
    const expiry = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `free_booking_claimed=true; path=/; expires=${expiry.toUTCString()}; SameSite=Lax`;
  }, []);

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center bg-background">
      <div className="max-w-xl w-full bg-card p-10 rounded-[2rem] border border-border shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-tr-full -ml-8 -mb-8" />

        <div className="relative">
          <div className="flex justify-center mb-8">
            <div className="bg-primary/10 p-5 rounded-2xl animate-bounce-subtle">
              <CheckCircle2 className="w-16 h-16 text-primary" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4 text-card-foreground">
            تم حجز حصتك المجانية بنجاح!
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            شكراً لاهتمامك ببرامجنا. رجاء قم بالتحقق من تطبيق{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.google.android.calendar&hl=en-US&pli=1"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              Google Calendar
            </a>{" "}
            لمتابعة موعد الحصة وسنقوم بالتواصل معك قريباً عبر الواتساب لتزويدك
            بكافة التفاصيل.
          </p>

          {/* Booking Details Summary */}
          {(eventName || inviteeName) && (
            <div className="bg-muted/50 rounded-2xl p-6 mb-10 text-right space-y-4 border border-border/50">
              <h2 className="font-semibold text-primary mb-2 border-b border-border pb-2 inline-block">
                تفاصيل الحجز:
              </h2>

              {inviteeName && (
                <div className="flex items-center gap-3 justify-end">
                  <span className="font-medium">{inviteeName}</span>
                  <User className="h-4 w-4 text-accent" />
                </div>
              )}

              {eventName && (
                <div className="flex items-center gap-3 justify-end">
                  <span className="font-medium">{eventName}</span>
                  <Calendar className="h-4 w-4 text-accent" />
                </div>
              )}

              {startTime && (
                <div className="flex items-center gap-3 justify-end">
                  <span className="font-medium text-sm" dir="ltr">
                    {new Date(startTime).toLocaleString()}
                  </span>
                  <Clock className="h-4 w-4 text-accent" />
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              asChild
              className="h-12 text-lg rounded-xl shadow-md hover:shadow-lg transition-all order-2 sm:order-1"
              variant="outline"
            >
              <Link href="/programs">
                {"استكشف البرامج"}
                <Calendar className="mr-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              className="h-12 text-lg rounded-xl shadow-md hover:shadow-lg transition-all order-1 sm:order-2"
            >
              <Link href="/">
                {"الرئيسية"}
                <Home className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ConfirmFreePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="h-12 w-12 bg-primary/20 rounded-full" />
            <div className="h-4 w-32 bg-muted rounded" />
          </div>
        </div>
      }
    >
      <ConfirmFreeContent />
    </Suspense>
  );
}
