"use client";
import dataCategory from "@/data/category.json";
import Input from "../Input";
import { useState } from "react";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

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

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <span>{selected}</span>
        {open ? <BiArrowToTop /> : <BiArrowToBottom />}
      </div>

      {open && (
        <div>
          {dataCategory.map((cat: DataCategoryProps) => (
            <Input
              key={`${cat.id}`}
              label={cat.category}
              type="radio"
              name="category"
              placeholder="Selecione uma categoria"
              value={cat.category}
            //   onChange={handleChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/*


            <div>
              <div onClick={() => setOpen(!open)}>
                <span>{selected}</span>
                {open ? <BiArrowToTop /> : <BiArrowToBottom />}
              </div>

              {open && (
                <div>
                  {category.map((cat, index) => (
                    <Input
                      key={`${cat.value}-${index}`}
                      label={cat.value}
                      type="radio"
                      name="category"
                      placeholder="Selecione uma categoria"
                      value={cat.value}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              )}
            </div>
            */
