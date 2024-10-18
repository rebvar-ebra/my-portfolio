import React from "react";

export default function Hero() {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href=""> Rebvar Ebrahimi</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        FrontEnd developer
      </h2>
      <p className="mt-4 max-w-xs leading-normal">
        I build pixel-perfect, engaging, and accessible digital experiences.
      </p>
    </div>
  );
}
