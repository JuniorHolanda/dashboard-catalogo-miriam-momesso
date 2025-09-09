"use client";
import dataCategory from "@/data/category.json";
import Input from "../Input";
import { useState } from "react";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import { DiDart } from "react-icons/di";
import { SSelect } from "./Select.styles";

type SelectProps = {
  type: string;
};

type DataCategoryProps = {
  id: number;
  category: string;
  start: string;
  end: string;
  img: string;
  altImg: string;
  description: string;
};

export default function Select(props: SelectProps) {
  const data = props;

  const [open, setOpen] = useState<Boolean>(false);
  const [selected, setSelected] = useState<string>("Escolha uma categoria");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  }

  return (
    <SSelect>
      <span onClick={() => setOpen(!open)}>
        <span>{selected}</span>
        {open ? <BiArrowToTop /> : <BiArrowToBottom />}
      </span>

      {open && (
        <ul>
          {dataCategory.map((cat: DataCategoryProps) => (
            <li>
              <Input
              key={`${cat.id}`}
              label={cat.category}
              value={cat.category}
              type="radio"
              name="category"
              placeholder="Selecione uma categoria"
              onChange={handleChange}
              $isSelect={true}
            />
            </li>
          ))}
        </ul>
      )}
    </SSelect>
  );
}
