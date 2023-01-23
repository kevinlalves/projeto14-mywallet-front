import styled from "styled-components";

const TransactionStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 16px;
  }
  p:nth-child(1) {
    color: ${props => props.theme.colors.weak};
  }
  p:nth-child(2) {
    overflow-wrap: break-word !important;
  }
  p:nth-child(3) {
    color : ${props => props.isProfit ? props.theme.colors.profit : props.theme.colors.debt};
    width: 70px;
  }
`;

export default TransactionStyled;
