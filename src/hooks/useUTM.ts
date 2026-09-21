"use client";

import { useEffect, useState } from "react";

type UTMPayload = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  fbclid?: string;
};

export function useUTM() {
  const [utm, setUTM] = useState<UTMPayload>({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const parse = (param: string) => searchParams.get(param) || "";

    const payload: UTMPayload = {
      utmSource: parse("utm_source"),
      utmMedium: parse("utm_medium"),
      utmCampaign: parse("utm_campaign"),
      utmTerm: parse("utm_term"),
      utmContent: parse("utm_content"),
      gclid: parse("gclid"),
      fbclid: parse("fbclid"),
    };

    // Store in sessionStorage (clears on tab close)
    sessionStorage.setItem("utm_params", JSON.stringify(payload));
    setUTM(payload);

    // Also update URL state for reactivity
    const handlePopState = () => {
      const newParams = new URLSearchParams(window.location.search);
      const newPayload: UTMPayload = {
        utmSource: newParams.get("utm_source") || "",
        utmMedium: newParams.get("utm_medium") || "",
        utmCampaign: newParams.get("utm_campaign") || "",
        utmTerm: newParams.get("utm_term") || "",
        utmContent: newParams.get("utm_content") || "",
        gclid: newParams.get("gclid") || "",
        fbclid: newParams.get("fbclid") || "",
      };
      sessionStorage.setItem("utm_params", JSON.stringify(newPayload));
      setUTM(newPayload);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return utm;
}