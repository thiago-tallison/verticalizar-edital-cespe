import { Nav } from "./Nav";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-center border-b px-6 py-3">
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
}
