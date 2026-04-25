"use client";

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'Título (Squid Boy)';
          }
          return 'Escribe algo, o escribe "/" para comandos...';
        },
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-zinc prose-p:font-sans prose-headings:font-display prose-headings:text-brand-burgundy max-w-none focus:outline-none min-h-[500px]',
      },
    },
  });

  return (
    <div className="max-w-3xl mx-auto w-full px-8 py-12">
      <div className="mb-8">
        <input 
          type="text" 
          placeholder="Título de la Nota" 
          className="w-full text-5xl font-display text-zinc-900 placeholder:text-zinc-300 focus:outline-none bg-transparent"
        />
      </div>
      <EditorContent editor={editor} />
      
      {/* Estilos para el placeholder de TipTap */}
      <style jsx global>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
      `}</style>
    </div>
  );
}
