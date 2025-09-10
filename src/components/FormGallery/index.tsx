"use client";
import { useState } from "react";
import {
  ScardImg,
  ScontainerCards,
  ScontainerImg,
  SformGallery,
  Sheader,
  Sinfo,
  Sinput,
} from "./FormGallery.styles";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

 type GalleryItem = {
    file: File;
    preview: string;
    altText: string;
  };




export default function FormGallery({ onChange }: { onChange: (items: GalleryItem[]) => void } ) {

  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  const handleAltChange = (index: number, value: string) => {
    const updated = gallery.map((item, i) =>  i === index ? { ...item, altText: value } : item);

    setGallery(updated);
    onChange(updated);
  };

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

    const newItem: GalleryItem = {
      file: selected,
      preview: URL.createObjectURL(selected),
      altText: ""
    };

    const updated = [...gallery, newItem];
    setGallery(updated);
    onChange(updated);

    e.target.value = "";
  };

  return (
    <SformGallery>
      <ScontainerCards>
        {gallery.map((img, index) => (
          <ScardImg key={index}>
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
                value={img.altText}
                onChange={(e) => handleAltChange(index, e.target.value)}
              ></textarea>
            </Sinfo>
            <ScontainerImg>
              <img src={img.preview} alt={img.altText} />
            </ScontainerImg>
          </ScardImg>
        ))}
      </ScontainerCards>

      <Sinput>
        <FaPlus />
        <input type="file" accept=".png, .jpg, .jpeg" onChange={handleChange} />
      </Sinput>
    </SformGallery>
  );
}