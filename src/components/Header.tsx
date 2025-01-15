"use client";

import { CreateNewStudySectionModal } from "./CreateNewStudySectionModal";

export function Header() {
  return (
    <div className="py-4 px-4">
      <header className="flex items-center justify-center p-4 border-[#313131] border rounded-xl shadow-lg bg-[#111111]">
        <div className="max-w-screen-xl w-full flex items-center justify-between">
          <h1 className="font-bold text-xl">Spaced Repetition.</h1>
          <div>
            <CreateNewStudySectionModal />
          </div>
        </div>
      </header>
    </div>
  );
}
