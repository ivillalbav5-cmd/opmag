import React from 'react';
import { FileText, Plus, Settings, Home, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#fbfbfa] border-r border-[#e9e9e7] h-screen flex flex-col font-sans text-[14px] text-[#37352f]">
      <div className="p-4 flex items-center justify-between hover:bg-black/5 cursor-pointer rounded-sm mx-2 mt-2 transition-colors">
        <div className="flex items-center gap-2 font-medium">
          <div className="w-5 h-5 bg-brand-burgundy rounded-sm flex items-center justify-center text-white text-[10px]">
            OP
          </div>
          Oro y Perfume
        </div>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-0.5">
        <Link href="/(admin)" className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 rounded-sm transition-colors text-black/60 hover:text-black">
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 rounded-sm transition-colors text-black/60 hover:text-black cursor-pointer">
          <LayoutDashboard className="w-4 h-4" />
          <span>Dashboard</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 rounded-sm transition-colors text-black/60 hover:text-black cursor-pointer">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </div>

        <div className="pt-6 pb-2">
          <div className="px-3 text-xs font-semibold text-black/40">Workspace</div>
        </div>
        
        <div className="flex items-center justify-between px-3 py-1.5 hover:bg-black/5 rounded-sm transition-colors cursor-pointer group">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-black/40" />
            <span>Notas</span>
          </div>
          <Plus className="w-4 h-4 text-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 rounded-sm transition-colors pl-8 cursor-pointer text-black/70">
          <FileText className="w-4 h-4 text-black/40" />
          <span>Borrador: Entrevista Duki</span>
        </div>
      </nav>
    </aside>
  );
}
