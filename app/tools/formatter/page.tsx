"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FormatterDefault() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/tools/formatter/json"); // default to JSON
  }, [router]);

  return null; // or a loading spinner
}