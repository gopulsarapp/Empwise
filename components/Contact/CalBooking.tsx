'use client';

import Cal from "@calcom/embed-react";

export default function CalBooking() {
  return (
    <Cal
      calLink="novotek/60min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        layout: "month_view"
      }}
    />
  );
}
