import Button from "../Button"
import { CardPrize, CardText, CardTitle, FoodCardImg, FoodCardWrapper, TitleWrapper } from "./FoodCard.styled"

type FoodCardProps = {
  image: string,
  title: string,
  price: string,
  description: string,
}

const FoodCard = ({image, title, price, description}:FoodCardProps) => {
  const AddToCart = () => {}
  return <FoodCardWrapper>
    <FoodCardImg src={image}/>
    <TitleWrapper>
      <CardTitle>{title}</CardTitle>
      <CardPrize>{price}</CardPrize>
    </TitleWrapper>
    <CardText>{description}</CardText>
    <Button disabled={false} label="Order delivery" handleClick={() =>AddToCart}></Button>
  </FoodCardWrapper>
}

export default FoodCard