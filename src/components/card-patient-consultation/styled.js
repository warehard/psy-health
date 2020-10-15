import { Rate, Button } from "antd";
import styled from "styled-components";
// import Button from "../button";

export const CardContainer = styled.div`
  margin-bottom: 20px;
  background: #fbfbfb;
  border-radius: 5px;
  border: 2px solid #70a3ef;
  height: 140px;
  width: 1050px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1270px) {
    height: 220px;
    width: 80vw;
  }

  @media (max-width: 710px) {
    height: 220px;
  }
`;

export const ImgAndNameCardCotainer = styled.div`
  display: flex;
  width: 350px;
  height: 114px;

  @media (max-width: 710px) {
    width: 280px;
    height: 70px;
  }
`;

export const ImgDivCotainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 114px;

  @media (max-width: 710px) {
    width: 100px;
    height: 70px;
  }
`;

export const PhotoPsychologist = styled.img`
  border-radius: 50%;
  border: 2px solid #70a3ef;
  width: 90px;
  height: 90px;

  @media (max-width: 710px) {
    width: 65px;
    height: 65px;
  }
`;

export const NameDivCotainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  width: 300px;
  height: 114px;

  @media (max-width: 710px) {
    padding-top: 5px;
    width: 200px;
    height: 70px;
  }
`;

export const CrpDiv = styled.div`
  color: #70a3ef;
  font-weight: 700;
  font-size: 14px;

  @media (max-width: 710px) {
    font-size: 12px;
  }
`;

export const TitleForName = styled.div`
  padding-bottom: 10px;
  color: #585858;
  font-weight: 600;
  font-size: 18px;

  @media (max-width: 710px) {
    padding-bottom: 5px;
    font-size: 14px;
  }
`;

export const TitleForDateScheduleValueAndAvaliation = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  color: #585858;
  font-weight: 600;
  font-size: 18px;

  @media (max-width: 710px) {
    padding-bottom: 5px;
    font-size: 14px;
  }
`;

export const DateScheduleAndValueContainer = styled.div`
  display: flex;
  padding-top: 15px;
  width: 510px;
  height: 114px;

  @media (max-width: 710px) {
    padding-top: 0px;
    width: 250px;
    height: 50px;
  }
`;

export const DateScheduleAndValue = styled.div`
  text-align: center;
  width: 140px;

  @media (max-width: 710px) {
    width: 110px;
    height: 50px;
  }
`;

export const TextStyle = styled.div`
  text-align: center;
  color: #6e6e6e;
  font-size: 14px;

  @media (max-width: 710px) {
    font-size: 12px;
  }
`;

export const AvaliationOrButton = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 150px;
  height: 114px;

  @media (max-width: 710px) {
    padding: 0px;
    width: 300px;
    height: 50px;
  }

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const NewRate = styled(Rate)`
  font-size: 16px;

  @media (max-width: 710px) {
    font-size: 14px;
  }
`;
