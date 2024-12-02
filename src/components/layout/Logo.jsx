import React from "react";
import { AlertCircle } from "lucide-react";

const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <AlertCircle style={{ width: "32px", height: "32px", color: "#3b82f6" }} />
      <div>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#ffffff" }}>
          RISK HAWK
        </h1>
        <p style={{ fontSize: "12px", color: "#9ca3af" }}>
          manage your exposures
        </p>
      </div>
    </div>
  );
};

export default Logo;
