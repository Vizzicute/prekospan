import { dishes } from "@/utils/data"
import FoodItem from "./FoodItem"

const FoodMenu = () => {
  return (
    <>
        <section className='w-full mt-10 p-5'>
        <div className='text-center uppercase'>
            <h3 className='font-lato text-stone-500 font-semibold leading-3'>Check Out Our</h3>
            <h2 className='italic text-primary font-bold text-3xl'>African Dishes</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md;grid-cols-3 lg:grid-cols-4 gap-8 p-5'>
            {dishes.map(({id, imgUrl, price, description, title}) => (
                <FoodItem
                    id={id}
                    key={id}
                    dishImg={imgUrl}
                    dishDescription={description}
                    dishPrice={price}
                    dishTitle={title}
                />
            ))}
        </div>
        </section>
    </>
  )
}

export default FoodMenu
