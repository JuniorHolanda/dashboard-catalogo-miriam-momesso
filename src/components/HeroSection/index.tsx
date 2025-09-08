import {
  Saside,
  ScontainerData,
  Sform,
  SheroSection,
} from "./HeroSection.styles";
import dataCategory from '@/data/category.json'
import Select from "../Select";
import Input from "../Input";

export default function HeroSection() {
  return (
    <SheroSection>
      <Saside>
        <p>Teste</p>
      </Saside>
      <Sform>
        <ScontainerData>
          <div>
            <h1>Informações</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              fuga magnam rem quia! Delectus.
            </p>
          </div>
          <div>
            <Input
              label="Nome do Produto"
              name="nome-do-produto"
              type="text"
              placeholder="Digite o nome do produto"
            />

            <Select type="costuraveis" />




            <Input
              label="Medidas"
              name="medidas-do-produto"
              type="text"
              placeholder="Digite as medidas do produto"
            />
            <Input
              label="Descrição curta"
              name="medidas-do-produto"
              type="text"
              placeholder="Descrição para o card"
            />
            <Input
              label="Descrição Longa"
              name="medidas-do-produto"
              type="text"
              placeholder="Descrição completa do produto"
            />
          </div>
        </ScontainerData>
        <div></div>
        <button>CONFIRMAR</button>
      </Sform>
    </SheroSection>
  );
}