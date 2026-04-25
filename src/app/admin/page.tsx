import Editor from "@/components/admin/Editor";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-end px-8 py-4 border-b border-zinc-100">
        <button className="px-4 py-1.5 bg-brand-teal text-brand-beige text-sm font-medium rounded-sm hover:bg-brand-burgundy transition-colors">
          Publicar
        </button>
      </div>
      <Editor />
    </div>
  );
}
