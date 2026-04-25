"use client";

import { useState } from "react";
import Editor from "@/components/admin/Editor";
import { BarChart3, PenTool, TrendingUp, Eye, MousePointerClick } from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'editor' | 'metrics'>('metrics');

  return (
    <div className="min-h-screen bg-brand-teal text-brand-beige selection:bg-brand-burgundy selection:text-white font-sans">
      <div className="flex items-center justify-between px-8 py-4 border-b border-brand-beige/10">
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab('metrics')}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'metrics' ? 'bg-brand-beige/10 text-brand-beige' : 'text-brand-beige/50 hover:bg-brand-beige/5 hover:text-brand-beige/80'}`}
          >
            <BarChart3 size={16} />
            Métricas
          </button>
          <button 
            onClick={() => setActiveTab('editor')}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'editor' ? 'bg-brand-beige/10 text-brand-beige' : 'text-brand-beige/50 hover:bg-brand-beige/5 hover:text-brand-beige/80'}`}
          >
            <PenTool size={16} />
            Editor
          </button>
        </div>
        <button className="px-4 py-1.5 bg-brand-beige text-brand-teal text-sm font-bold rounded-sm hover:bg-brand-burgundy hover:text-brand-beige transition-colors">
          Publicar
        </button>
      </div>

      {activeTab === 'editor' ? (
        <div className="bg-white min-h-[calc(100vh-65px)]">
          <Editor />
        </div>
      ) : (
        <DashboardMetrics />
      )}
    </div>
  );
}

function DashboardMetrics() {
  // Mocks de datos
  const stats = [
    { label: "Vistas Totales", value: "142.5K", change: "+12.5%", icon: Eye },
    { label: "Clics en Anuncios", value: "3.2K", change: "+5.2%", icon: MousePointerClick },
    { label: "Ingresos Estimados", value: "$450.20", change: "+18.1%", icon: TrendingUp },
  ];

  // Datos para el mini gráfico
  const chartData = [30, 45, 25, 60, 80, 55, 90, 75, 40, 65, 85, 100];

  return (
    <div className="max-w-5xl mx-auto p-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="font-display text-3xl mb-2">Dashboard de Rendimiento</h2>
        <p className="text-brand-beige/60 text-sm">Resumen de monetización y tráfico en tiempo real.</p>
      </div>

      {/* Tarjetas de KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 border border-brand-beige/10 rounded-lg bg-[#0D2420]/50 hover:border-brand-beige/20 transition-colors">
            <div className="flex items-center gap-3 text-brand-beige/60 mb-4">
              <stat.icon size={18} />
              <span className="text-xs tracking-widest uppercase">{stat.label}</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-4xl font-display">{stat.value}</span>
              <span className="text-sm font-medium text-green-400 mb-1">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico Estilo Claude (CSS Puro) */}
      <div className="p-6 border border-brand-beige/10 rounded-lg bg-[#0D2420]/50">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs tracking-widest uppercase text-brand-beige/60">Tráfico (Últimos 12 días)</span>
          <span className="text-xs text-brand-beige/40">Visualizaciones vs CTR</span>
        </div>
        
        <div className="flex items-end justify-between h-48 gap-2">
          {chartData.map((height, i) => (
            <div key={i} className="w-full relative group">
              <div 
                className="absolute bottom-0 w-full bg-brand-beige/20 rounded-t-sm group-hover:bg-brand-burgundy transition-all duration-300"
                style={{ height: `${height}%` }}
              >
                {/* Tooltip on hover */}
                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-teal border border-brand-beige/20 text-brand-beige text-xs py-1 px-2 rounded pointer-events-none transition-opacity z-10">
                  {height * 100}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
