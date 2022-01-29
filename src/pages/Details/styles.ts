import styled from "styled-components/native";
import { colors } from "../../common/commonStyles";

export const MainContainer = styled.View`
  background-color: rgb(25, 25, 32);
  flex: 1;
  align-items: center;
`;

export const Container = styled.View`
  background-color: ${colors.white};
  margin-bottom: 5%;
  margin-top: 5%;
  width: 80%;
  height: 90%;
  border-radius: 15px;
  align-items: center;
`;

export const PokePrice = styled.Text`
  color: ${colors.lightWhite};
  font-size: 24px;
  font-weight: bold;
`;
export const PokeTitle = styled.Text`
  color: ${colors.black};
  font-size: 28px;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 180px;
  height: 180px;
`;

export const ContainerTypesWrapper = styled.View`
  width: 80%;
`;

export const ContainerType = styled.Text`
  font-size: 24px;
  font-weight: bold;
  align-self: flex-start;
`;

export const Type = styled.Text`
  font-size: 16px;
  color: black;
`;

export const ContainerTypes = styled.View`
  flex-direction: column;

  margin-top: 5%;
`;
export const ContainerStats = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`;
