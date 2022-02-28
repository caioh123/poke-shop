import styled from "styled-components/native";
import { colors } from "../../commonStyles";

interface Props {
  typeElement?: string
  bold?: string
}

export const CardContainer = styled.View<Props>`
background-color: ${colors.white};
margin-bottom: 5%;
margin-top: 5%;
width: 80%;
height: 400px;
border-radius: 15px;
align-self: center;
justify-content: center;
align-items: center;
`

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const CardText = styled.Text<Props>`
  font-size: 24px;
  color: ${colors.black};
  font-weight: ${props => props.bold === "bold" ? "bold" : "normal"};

`

export const Wrapper = styled.View`
align-self: flex-start;
margin-left: 10%;
`
export const CardButton = styled.TouchableOpacity<Props>`
  background-color: ${props => props.typeElement === "fire" ? colors.fire : colors.grass};
  width: 80%;
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

`
export const CardButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
  margin: 5px;

`