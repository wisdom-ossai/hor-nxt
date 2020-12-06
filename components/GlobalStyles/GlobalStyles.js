const { Global, css } = require("@emotion/react");
import normalize from "normalize.css";
const GlobalStyles = () => (
    <>
        <Global styles={css`
        ${normalize}
        html, body {
     font-family: 'Inter', sans-serif;
      background: white;
    }
      `} />
    </>
);

export default GlobalStyles;