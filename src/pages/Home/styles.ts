import styled from "styled-components/native";
import { colors } from "../../common/commonStyles";
// import { colors } from "../../common/commonStyles";

export const Container = styled.View`
  background-color: rgb(25, 25, 32);
  flex: 1;
`;

// export const MainContainer = styled.View`
//   margin-top: 10%;
//   justify-content: space-evenly;
//   align-items: center;
//   flex-wrap: wrap;
//   flex-direction: row;
// `;
export const Image = styled.Image`
  opacity: 0.5;
  width: 80%;
`;

// export const ImageBackground = styled.View`
//   background-color: ${colors.white};
//   width: 30%;
//   height: 40%;
//   margin: 3%;
//   border-radius: 100px;
//   align-items: center;
//   justify-content: center;
// `;

export const ImageOption = styled.Image`
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.View`
  background-color: rgb(25, 25, 32);

  margin-top: 10%;
  justify-content: center;
  align-items: center;
`;

export const ContainerGridImage = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  height: 80%;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  height: 20%;
  width: 30%;
  background-color: ${colors.white};
  border-radius: 60px;
  margin: 5%;
  margin-bottom: 20%;
`;
