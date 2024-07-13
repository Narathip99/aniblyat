import React from "react";
import { Link } from "react-router-dom";

const header: React.FC = () => {
  return (
    <header className="bg-primary">
      <div className="container h-[64px] flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-secondary">Aniblyat</h1>
        <nav className="text-secondary text-sm font-medium flex gap-8">
          <Link to="/">Showtime</Link>
          <Link to="/">Menu A</Link>
          <Link to="/">Menu B</Link>
        </nav>
        mode
      </div>
    </header>
  );
};

export default header;
