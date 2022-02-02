import React from "react";

/**
 * Vertical line
 */
export default function Vl({ children }) {
  return (
    <div style={{
      borderLeft: '1px solid #f1f1f1', padding: '10px 0 10px 10px',
      display: "flex",
      flexDirection: "column",
      justifyItems: 'center'
    }}>
      {children}
    </div>
  )
}
