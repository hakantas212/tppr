import styled from "styled-components";

const Heading = styled.div`
  line-height: ${({size}) => size === "lg" && "80px" || size === "md" && "50px" || size === "sm" && "34px" || "50px"};
  font-size: ${({size}) => size === "lg" && "64px" || size === "md" && "48px" || size === "sm" && "32px" || "48px"};
  letter-spacing: 1px;
  ${({bold}) => bold && "font-weight: bold"};
  color: ${({color}) => color || "#14142B"};
  margin-bottom: 20px;
  ${({textAlign}) => textAlign && `text-align: ${textAlign};`}
`

export default Heading
