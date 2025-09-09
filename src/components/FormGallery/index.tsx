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

export default function FormGallery() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

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

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  return (
    <SformGallery>
      {preview && (
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
            ></textarea>
          </Sinfo>
          <ScontainerImg>
            <img src={preview} alt="" />
          </ScontainerImg>
        </ScardImg>
      )}
      <Sinput>
        <FaPlus />
        <input type="file" accept=".png, .jpg, .jpeg" onChange={handleChange} />
      </Sinput>
    </SformGallery>
  );
}
