import styled from "styled-components";

const Text = styled.div`
  line-height: ${({size}) => size === "lg" && "38px" || size === "md" && "34px" || size === "sm" && "28px" || size === "xsm" && "20px" || "34px"};
  font-size: ${({size}) => size === "lg" && "24px" || size === "md" && "18px" || size === "sm" && "16px" || size === "xsm" && "14px" || "18px"};
  letter-spacing: ${({size}) => size === "xsm" ? "0.25px" : "0.75px"};
  ${({bold}) => bold && "font-weight: bold"};
  color: ${({color}) => color || "#4E4B66"};
  z-index: 1;
`

export default Text
