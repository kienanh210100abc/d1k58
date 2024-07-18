"use client";

import { AUTH_GATE_API, CAPT_KEY, APP_CODE } from "@/constants";
import CachedIcon from "@mui/icons-material/Cached";
import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const random = () => crypto.randomUUID();

const RefreshButton = styled("button")({
  background: "unset",
  border: "none",
  outline: "none",
  cursor: "pointer",
});

export default forwardRef<{ refresh?: () => void }>(function Captcha(_, ref) {
  const [r, setR] = useState(Date.now());
  function refresh() {
    setR(Date.now());
  }

  useEffect(() => {
    const timer = setTimeout(refresh, 2 * 60 * 1000);
    return () => clearTimeout(timer);
  }, [r]);
  useImperativeHandle(ref, () => ({ refresh }), []);
  return (
    <Stack direction="row" gap={1} height={50} alignItems="center">
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${AUTH_GATE_API}/captcha/generator/${APP_CODE}/${CAPT_KEY}?ran=${r}`}
          alt="captcha"
          width={100}
          height={50}
          style={{ borderRadius: 8 }}
        />
      }
      <RefreshButton type="button" onClick={refresh}>
        <CachedIcon />
      </RefreshButton>
    </Stack>
  );
});
