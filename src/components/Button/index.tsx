import { Sbutton } from "./Button.styles";

type propsButton = {
    children: React.ReactNode
}

export default function Button({ children } : propsButton) {


  return (
    <Sbutton type="submit">
      {children}
    </Sbutton>
  );
}
