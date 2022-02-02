import React from "react";

export default function Card ({ title, description, children }) {
  return <div style={{height: '5vw', width: '5vw', borderRadius: '10px', padding: '20px', boxShadow: '0 0 1em grey'}}>{children}</div>
}