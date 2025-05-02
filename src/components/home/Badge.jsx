import React from "react";

export default function Badge({text, className = "", preIcon = null, tailIcon = null }) {
  return (
    <>
      <div
        className={`badge text-black text-sm my-4 rounded-full px-4 py-1 ${className} ${
          preIcon || tailIcon ? "flex items-center gap-2" : null
        }`}>
        {preIcon && preIcon} {text } {tailIcon && tailIcon}
      </div>
    </>
  );
}
