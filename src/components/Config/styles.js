import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "container",
})``;

export const Row = styled.div.attrs({
  className: "row",
})``;

export const TenColumns = styled.div.attrs({
  className: "offset-by-one ten columns",
})`
  position: relative;
`;

export const NoNumeration = styled.div``;

export const Tabing = styled.div``;

export const Proccess = styled.button.attrs({
  type: "button",
})`
  top: 0;
  right: 0;
  position: absolute;
`;
