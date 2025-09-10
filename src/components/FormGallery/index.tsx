"use client";
import { useState } from "react";
import {
  ScardImg,
  ScontainerImg,
  SformGallery,
  Sheader,
  Sinfo,
  Sinput,
} from "./FormGallery.styles";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { it } from "node:test";

export default function FormGallery() {
  const [files, setFile] = useState<File[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [altText, setAltText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (!["image/jpeg", "image/png"].includes(selected.type)) {
      alert("Apenas JPEG ou PNG são permitidos.");
      return;
    }

    if (selected.size > 300 * 1024) {
      alert("Arquivo muito grande (máx. 300kb).");
      return;
    }

    setFile([...files, selected]);
    console.log(files);
    setPreview(URL.createObjectURL(selected));
  };

  return (
    <SformGallery>
      {preview && files.map((img, index) => (
        <ScardImg>
          <Sheader>
            <button>Capa</button>
            <button>
              <IoClose />
            </button>
          </Sheader>
          <Sinfo>
            <span>Texto Alternativo</span>
            <textarea
              name="texAlt"
              placeholder="descreva a imagem"
              maxLength={100}
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
            ></textarea>
          </Sinfo>
          <ScontainerImg>
            <img src={files[0]} alt={altText} />
          </ScontainerImg>
        </ScardImg>
      ))}

      <Sinput>
        <FaPlus />
        <input type="file" accept=".png, .jpg, .jpeg" onChange={handleChange} />
      </Sinput>
    </SformGallery>
  );
}
