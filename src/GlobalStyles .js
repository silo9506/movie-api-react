import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   ${reset}
   HTML  {
      --nav-bg-color:#000;
      --icon-color:#666666;
      --bg-color:#060d17;
      --input-bg-color:#10161d;
      --logo-color:#fbcb1a;
      --btn-bg-color:#1c252f;
      --nav-height:56px;
   }



   *{
      box-sizing:border-box;
      text-decoration: none;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
         display: none;
      }

   }
`;

export default GlobalStyles;
