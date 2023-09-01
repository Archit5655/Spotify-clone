"use client"
import React from 'react'
import * as RadixSlider from '@radix-ui/react-slider'
interface sliderprops{
    value?:number,
    onChange?:(value:number) =>void
}
const Slider:React.FC<sliderprops> = ({value=1,onChange}) => {
    const handlechange=(newvalue:number[])=>{
        onChange?.(newvalue[0])


    }
  return (
<RadixSlider.Root 
className=' relative flex items-center select-none touch-none w-full h-10'
defaultValue={[1]}
value={[value]}
onValueChange={handlechange}
max={1}
step={0.1}
aria-label='Volume'
>
    <RadixSlider.Track className='bg-neutral-600 relative grow rounded-full h-[3px]'>
        <RadixSlider.Range  
        className=' absolute bg-white rounded-full h-full'
        
        />


    </RadixSlider.Track>


</RadixSlider.Root>
  )
}

export default Slider
