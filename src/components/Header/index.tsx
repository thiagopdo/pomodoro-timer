import { CaretDoubleUp, Scroll, Timer } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <CaretDoubleUp size={24} weight="fill" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
