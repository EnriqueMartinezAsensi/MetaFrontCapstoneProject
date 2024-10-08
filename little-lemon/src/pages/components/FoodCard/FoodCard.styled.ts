import styled from "styled-components";

export const FoodCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0rem;
  padding: 0;
  width: 28%;
  background-color: ${({theme}) => theme.colors.common.grey};
  border-radius: ${({theme}) => theme.radiuses.medium}px;
`

export const FoodCardImg = styled.img`
  width: 100%;
  height: 40%;
  border-radius: ${({theme}) => theme.radiuses.medium}px;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`

export const CardTitle = styled.h3`
  margin: 0.7rem;
  font-size: 1.5rem;
`

export const CardPrize = styled.h3`
  margin: 0.7rem;
  font-size: 1rem;
`

export const CardText = styled.p`
  margin: 0.5rem;
  text-align: center;
`