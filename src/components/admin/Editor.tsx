"use client";

import React, { useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import { Node, mergeAttributes } from '@tiptap/core';
import { ImageIcon, Video as YoutubeIcon, Music, Quote, Type } from 'lucide-react';

const Iframe = Node.create({
  name: 'iframe',
  group: 'block',
  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
    }
  },

  parseHTML() {
    return [{ tag: 'iframe' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['iframe', mergeAttributes(HTMLAttributes, { frameBorder: 0, allowFullScreen: "true", className: "w-full aspect-video rounded-lg my-8" })]
  },
});

const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      class: {
        default: 'w-full rounded-lg my-8 contained-image',
      },
    };
  },
});

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
          return 'Escribe algo... Usa el menú flotante para bloques.';
        },
      }),
      CustomImage,
      Youtube.configure({
        inline: false,
        HTMLAttributes: {
          class: 'w-full aspect-video rounded-lg my-8',
        },
      }),
      Iframe,
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-zinc max-w-none focus:outline-none min-h-[500px] prose-p:font-sans prose-p:text-lg prose-p:leading-relaxed prose-headings:font-display prose-headings:text-brand-burgundy prose-blockquote:font-display prose-blockquote:text-brand-burgundy prose-blockquote:text-3xl prose-blockquote:-ml-8 md:prose-blockquote:-ml-16 prose-blockquote:border-l-4 prose-blockquote:border-brand-burgundy prose-blockquote:pl-6 prose-blockquote:my-12 prose-blockquote:not-italic',
      },
    },
  });

  const addImage = useCallback(() => {
    const url = window.prompt('URL de la imagen');
    if (url && editor) {
      const type = window.confirm('¿Deseas que la imagen sea Full-Bleed (rompe la grilla)?') ? 'full-bleed my-12' : 'w-full rounded-lg my-8 contained-image';
      editor.chain().focus().setImage({ src: url }).updateAttributes('image', { class: type }).run();
    }
  }, [editor]);

  const addYoutube = useCallback(() => {
    const url = window.prompt('URL de YouTube');
    if (url && editor) {
      editor.chain().focus().setYoutubeVideo({ src: url }).run();
    }
  }, [editor]);

  const addSpotifyTikTok = useCallback(() => {
    const url = window.prompt('URL del Embed (Spotify o TikTok Iframe src)');
    if (url && editor) {
      editor.chain().focus().insertContent(`<iframe src="${url}"></iframe>`).run();
    }
  }, [editor]);

  return (
    <div className="max-w-3xl mx-auto w-full px-8 py-12 relative">
      <div className="mb-8">
        <input 
          type="text" 
          placeholder="Título de la Nota" 
          className="w-full text-5xl font-display text-zinc-900 placeholder:text-zinc-300 focus:outline-none bg-transparent"
        />
      </div>

      {editor && (
        <FloatingMenu editor={editor} className="flex gap-2 bg-white border border-zinc-200 shadow-sm p-1 rounded-md">
          <button onClick={addImage} className="p-2 hover:bg-zinc-100 rounded text-zinc-600 transition-colors" title="Añadir Imagen">
            <ImageIcon size={18} />
          </button>
          <button onClick={addYoutube} className="p-2 hover:bg-zinc-100 rounded text-zinc-600 transition-colors" title="Añadir YouTube">
            <YoutubeIcon size={18} />
          </button>
          <button onClick={addSpotifyTikTok} className="p-2 hover:bg-zinc-100 rounded text-zinc-600 transition-colors" title="Añadir Spotify/TikTok">
            <Music size={18} />
          </button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="p-2 hover:bg-zinc-100 rounded text-zinc-600 transition-colors" title="Subtítulo">
            <Type size={18} />
          </button>
        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu editor={editor} className="flex gap-1 bg-zinc-900 text-white shadow-md p-1 rounded-md">
          <button onClick={() => editor.chain().focus().toggleBold().run()} className={`p-1.5 px-3 hover:bg-zinc-800 rounded font-bold ${editor.isActive('bold') ? 'bg-zinc-800 text-brand-beige' : ''}`}>
            B
          </button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`p-1.5 px-3 hover:bg-zinc-800 rounded italic ${editor.isActive('italic') ? 'bg-zinc-800 text-brand-beige' : ''}`}>
            I
          </button>
          <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`p-1.5 px-3 hover:bg-zinc-800 rounded ${editor.isActive('blockquote') ? 'bg-zinc-800 text-brand-beige' : ''}`} title="Pull Quote">
            <Quote size={16} />
          </button>
        </BubbleMenu>
      )}

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
