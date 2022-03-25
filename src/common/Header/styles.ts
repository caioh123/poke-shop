import styled from "styled-components/native";
import { colors } from "../../common/commonStyles";

interface Props {
  typeElement?: string;
  element?: string;
}

export const Container = styled.View<Props>`
  background-color: ${(props) =>
    props.typeElement === "fire" ? colors.fire : colors.grass};
  flex-direction: row;
  width: 100%;
  height: 15%;
  align-items: center;
  padding-top: 5%;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 40%;
  opacity: 0.8;
`;

export const ButtonBack = styled.TouchableOpacity`
  width: 25%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextHeader = styled.Text<Props>`
  color: ${colors.white};
  font-size: ${(props) => (props.element === "back" ? "18px" : "16px")};
`;
export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
