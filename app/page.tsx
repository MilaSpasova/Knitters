"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [rows, setRows] = useState(0);
  useEffect(() => {
    const savedRows = localStorage.getItem("rows");

    if (savedRows !== null) {
      setRows(Number(savedRows));
    }
  }, []);

  function updateRows(newRows: number) {
    const safeRows = Math.max(0, newRows);

    setRows(safeRows);
    localStorage.setItem("rows", String(safeRows));
  }

  return (
    <main className="min-h-screen bg-rose-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm text-zinc-500">
          Welcome to
        </p>

        <h1 className="mt-1 text-4xl font-bold text-zinc-900">
          Knitters 🧶
        </h1>

        <p className="mt-3 text-zinc-600">
          Your cozy knitting companion.
        </p>

        <p className="mt-6 text-lg font-medium text-zinc-800">
          Rows knitted: {rows}
        </p>

        <div className="mt-4 flex gap-3">
          <button
            onClick={() => updateRows(rows - 1)}
            className="rounded-full bg-zinc-200 px-5 py-2 font-medium text-zinc-900 hover:bg-zinc-300"
          >
            - 1 row
          </button>

          <button
            onClick={() => updateRows(rows + 1)}
            className="rounded-full bg-rose-200 px-5 py-2 font-medium text-zinc-900 hover:bg-rose-300"
          >
            + 1 row
          </button>
        </div>
      </div>
    </main>
  );
}