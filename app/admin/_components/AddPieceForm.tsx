"use client";

import Image from "next/image";
import { useState, useRef, useTransition } from "react";

type FieldDef =
  | { name: string; label: string; type?: "text" | "number" | "textarea"; placeholder?: string; defaultValue?: string }
  | { name: string; label: string; type: "select"; options: string[]; defaultValue?: string };

export function AddPieceForm({
  action,
  fields = [],
}: {
  action: (formData: FormData) => Promise<void>;
  fields?: FieldDef[];
}) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);

    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const { url } = await res.json();
    setUploadedUrl(url);
    setUploading(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!uploadedUrl) return;

    const fd = new FormData(e.currentTarget);
    fd.set("imageUrl", uploadedUrl);

    startTransition(async () => {
      await action(fd);
      formRef.current?.reset();
      setPreview(null);
      setUploadedUrl("");
      setOpen(false);
    });
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-dashed border-gray-300 rounded-xl px-4 py-3 hover:border-gray-400 hover:bg-gray-50 transition-colors w-full"
      >
        <span className="text-lg leading-none">+</span> Add new piece
      </button>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900">Add new piece</h2>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-xs text-gray-400 hover:text-gray-600"
        >
          Cancel
        </button>
      </div>

      {/* Title */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-600">Title</label>
        <input
          name="title"
          required
          placeholder="e.g. Amber Glow"
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        />
      </div>

      {/* Image upload */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-600">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
          className="text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
        />
        {uploading && <p className="text-xs text-gray-400">Uploading…</p>}
        {preview && !uploading && (
          <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 mt-1">
            <Image src={preview} alt="Preview" fill className="object-cover" />
          </div>
        )}
      </div>

      {/* Extra fields */}
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">{f.label}</label>
          {f.type === "select" ? (
            <select
              name={f.name}
              defaultValue={f.defaultValue ?? f.options[0]}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              {f.options.map((o) => (
                <option key={o} value={o}>
                  {o.charAt(0).toUpperCase() + o.slice(1)}
                </option>
              ))}
            </select>
          ) : f.type === "textarea" ? (
            <textarea
              name={f.name}
              rows={3}
              placeholder={f.placeholder}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm resize-none"
            />
          ) : (
            <input
              name={f.name}
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              defaultValue={f.defaultValue}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={!uploadedUrl || isPending}
        className="rounded-xl bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-gray-800 disabled:opacity-40 transition"
      >
        {isPending ? "Saving…" : "Save piece"}
      </button>
    </form>
  );
}
