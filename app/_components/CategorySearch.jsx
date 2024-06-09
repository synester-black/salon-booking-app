import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

function CategorySearch() {
  return (
    <div className='mb-100 items-center flex flex-col p-10 gap-4'>
        <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-blue-500'>Salons</span></h2>
        <h3 className='text-gray-700 text-xl'>Search Your Favourite Salon and Book an Appointment</h3>
        <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Enter Salon Name" />
      <Button type="submit"><Search className='h-4 w-4 p-0.5 mr-2'/>Search</Button>
    </div>
    

    </div>
  )
}

export default CategorySearch