import Image from 'next/image'
import React from 'react'

declare interface dishItemProps {
    id: number;
    dishImg: string;
    dishTitle: string;
    dishDescription: string;
    dishPrice: string;
}

const FoodItem = ({ id, dishImg, dishTitle, dishDescription, dishPrice}: dishItemProps) => {
  return (
    <div key={id} className='bg-stone-300 rounded-lg text-center shadow-md hover:bg-stone-50'>
        <img
            src={`${dishImg}`}
            alt='dish'
            className='aspect-square w-full object-cover rounded-t-lg'
        />
        <div className='w-full p-4'>
            <h4 className='font-semibold text-xl my-3'>{dishTitle}</h4>
            <p className='text-stone-500 text-sm'>{dishDescription}</p>
            <button className='mt-4 bg-primary text-slate-200 rounded-full px-8 py-2'>Add to cart ${dishPrice}</button>
        </div>
    </div>
  )
}

export default FoodItem
