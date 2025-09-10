"use client";

import { useState } from "react";
import Button from "../Button";
import FormGallery from "../FormGallery";
import { ScontainerBtn } from "../HeroSection/HeroSection.styles";
import Select from "../Select";
import {
  ScontainerData,
  ScontainerInfo,
  ScontainerInput,
  Sform,
  Slabel,
} from "./Form.styles";

type GalleryItem = {
  file: File;
  preview: string;
  altText: string;
};

export default function Form() {
  const [title, setTitle] = useState("");
  const [smallText, setSmallText] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState<string[]>([]);
  const [measure, setMeasure] = useState<string[]>([]);
  const [currentMeasure, setCurrentMeasure] = useState("");
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  function addMeasure() {
    if (currentMeasure.trim() === "") return;
    setMeasure([...measure, currentMeasure]);
    setCurrentMeasure(""); // limpa o input
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      // 1. Faz upload de todas as imagens
      const galleryUploads = await Promise.all(
        gallery.map(async (item) => {
          const formData = new FormData();
          formData.append("file", item.file);
          formData.append("folder", `product/${category[0]}/${title}/gallery`);

          const res = await fetch("http://localhost:3000/api/upload", {
            method: "POST",
            body: formData,
          });

          if (!res.ok) throw new Error("Erro no upload");

          const data = await res.json();
          return { img: data.url, altImg: item.altText };
        })
      );

      // 2. Define thumbnail (primeira imagem como capa, por exemplo)
      const thumbnail = galleryUploads[0]?.img;
      const altThumbnail = galleryUploads[0]?.altImg;

      // 3. Monta objeto final
      const produto = {
        title,
        smallText,
        text,
        category,
        measure,
        thumbnail,
        altThumbnail,
        gallery: galleryUploads,
      };

      // 4. Envia para API de produtos
      const res = await fetch("https://back-end-catalogo-miriam-momesso.onrender.com/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });

      if (!res.ok) throw new Error("Erro ao salvar produto");
      console.log("Produto salvo!");
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <Sform onSubmit={handleSubmit}>
      <ScontainerData>
        <ScontainerInfo>
          <h1>Informações</h1>
          <p>Preencha o formulário com as informações do produto</p>
        </ScontainerInfo>
        <ScontainerInput>
          <Select type="costuraveis"
          onChangeCategory={(value) => setCategory([value])}/>
          <label>
            Nome do produto
            <input
              type="text"
              name="nome-do-produto"
              placeholder="Digite o nome do produto"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            Medidas do produto
            <input
              type="text"
              placeholder="Digite as medidas do produto"
              value={currentMeasure}
              onChange={(e) => setCurrentMeasure(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addMeasure()}
            />
          </label>

          <ul>
            {measure.map((m, index) => (
              <li key={index}>{m}</li>
            ))}
          </ul>

          <Slabel>
            <span>Descricao Curta</span>
            <textarea
              name="descricao-card-produto"
              placeholder="Descrição para o card"
              value={smallText}
              onChange={(e) => setSmallText(e.target.value)}
            />
          </Slabel>

          <Slabel>
            <span>Descricao Longa</span>
            <textarea
              name="descricao-completa-produto"
              placeholder="Descrição completa"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Slabel>
        </ScontainerInput>
      </ScontainerData>

      <FormGallery onChange={setGallery} />
      <ScontainerBtn>
        <Button> Confirmar </Button>
      </ScontainerBtn>
    </Sform>
  );
}
