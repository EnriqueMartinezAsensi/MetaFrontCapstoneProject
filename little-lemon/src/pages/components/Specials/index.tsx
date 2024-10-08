import FoodCard from "../FoodCard";
import { SepcialsCardWrapper, SpecialsHeader } from "./Sepcials.styled";
import salad from "../../../assets/images/greek salad.jpg"
import bruscheta from "../../../assets/images/bruchetta.jpg"
import desert from "../../../assets/images/lemon dessert.jpg"

const Specials = () => {
  return <section>
    <SpecialsHeader>This week's specials</SpecialsHeader>
    <SepcialsCardWrapper>
      <FoodCard image={salad} title="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil."/>
      <FoodCard image={bruscheta} title="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil."/>
      <FoodCard image={desert} title="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest."/>
    </SepcialsCardWrapper>
  </section>
}

export default Specials;