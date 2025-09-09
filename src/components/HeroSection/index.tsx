import {
  Saside,
  Sbutton,
  ScontainerData,
  ScontainerInfo,
  ScontainerInput,
  Sform,
  SheroSection,
  Slabel,
} from "./HeroSection.styles";
import Select from "../Select";
import Input from "../Input";
import FormGallery from "../FormGallery";

export default function HeroSection() {
  return (
    <SheroSection>
      <Saside>
        <p>Teste</p>
      </Saside>
      <Sform>
        <ScontainerData>
          <ScontainerInfo>
            <h1>Informações</h1>
            <p>
              Preencha o formulário com as informações do produto
            </p>
          </ScontainerInfo>
          <ScontainerInput>
            <Select type="costuraveis" />
            <Input
              label="Nome do Produto"
              name="nome-do-produto"
              type="text"
              placeholder="Digite o nome do produto"
            />

            <Input
              label="Medidas"
              name="medidas-do-produto"
              type="text"
              placeholder="Digite as medidas do produto"
            />

            <Slabel>
              <span>Descricao Curta</span>
              <textarea
                name="descricao-card-produto"
                placeholder="Descrição para o card"
              />
            </Slabel>

            <Slabel>
              <span>Descricao Longa</span>
              <textarea
                name="descricao-completa-produto"
                placeholder="Descrição completa"
              />
            </Slabel>
          </ScontainerInput>
        </ScontainerData>

        <FormGallery />
        <Sbutton>
          <button>Confirmar</button>
        </Sbutton>
      </Sform>
    </SheroSection>
  );
}
