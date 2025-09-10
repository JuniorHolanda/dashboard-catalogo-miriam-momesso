"use client";
import dataCategory from "@/data/category.json";
import Input from "../Input";
import { useState } from "react";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import { SSelect } from "./Select.styles";

type SelectProps = {
  type: string;
  onChangeCategory: (value: string) => void; // callback
};

type DataCategoryProps = {
  id: number;
  img: string;
  altImg: string;
  text: string;
  category: string;
};

export default function Select({ type, onChangeCategory }: SelectProps) {
  //const data = props;

  const [open, setOpen] = useState<Boolean>(false);
  const [selected, setSelected] = useState<string>("Escolha uma categoria");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    onChangeCategory(e.target.value);
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
            <li key={cat.id}>
              <Input
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
