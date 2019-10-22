import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
    
    ${reset};
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        padding-top: 50px;
        background: rgba(20, 20, 20, 1);
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1rem;
        color: white;
    }
`;

export default globalStyles;
