import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   ${reset}
   HTML  {
      --nav-bg-color:#00000059;
      --icon-color:#666666;
      --bg-color:#060d17;
      --input-bg-color:#10161d;
      --logo-color:#fbcb1a;
      --btn-bg-color:#1c252f;
   }

   *{
      box-sizing:border-box;
      color:#fff;
      text-decoration: none;
   }

`;

export default GlobalStyles;
