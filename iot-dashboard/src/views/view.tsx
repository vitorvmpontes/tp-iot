// components/View.tsx
import React from "react";

interface ViewProps {
  children: React.ReactNode;
}

const View = ({ children }: ViewProps) => {
  return <div className="view">{children}</div>;
};

export default View;