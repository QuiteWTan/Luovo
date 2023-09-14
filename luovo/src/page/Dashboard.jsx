import React from 'react'

const Dashboard = () => {
  return (
    <div className='min-h-screen w-full container flex justify-center '>
      <div className='max-w-[1250px] w-full'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-3xl font-raleway font-bold'>DASHBOARD </h1>
          <div className='flex items-center gap-4'>
            <div className='rounded-full p-2 bg-white flex items-center'>
              <box-icon name='bell' size='25px'></box-icon>
            </div>
            <div className='rounded-full p-2 bg-white flex items-center'>
              <box-icon name='headphone' ></box-icon>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 py-4 gap-4 grid-rows-3 '>
          {/* first Row */}
          <div className='flex flex-col p-4 bg-gray-50 rounded-md shadow-lg border text-gray-800 row-span-1 col-span-1'>
            <div className='flex flex-row w-full items-center gap-2'>
              <div className='flex p-2 items-center rounded-md bg-gray-800'>
                <box-icon type='solid' name='wallet' size='20px' color='white'></box-icon>
              </div>
              <h1 className='font-poppins font-bold text-lg'>Name's Balance</h1>
            </div>
            <h1 className='font-poppins text-2xl font-bold pt-4'>Rp 340.000</h1>
            <h1 className='font-poppins pt-4'>Current Balance</h1>
          </div>
          <div className='flex flex-col p-4 bg-gray-50 rounded-md shadow-lg border text-gray-800 row-span-1 col-span-1'>
            <div className='flex flex-row w-full items-center gap-2'>
              <div className='flex p-2 items-center rounded-md bg-green-800'>
                <box-icon type='solid' name='wallet' size='20px' color='white'></box-icon>
              </div>
              <h1 className='font-poppins font-bold text-lg'>Income</h1>
            </div>
            <h1 className='font-poppins text-2xl font-bold pt-4'>Rp 340.000</h1>
            <h1 className='font-poppins pt-4'>Month's Income</h1>
          </div>
          <div className='flex flex-col p-4 bg-gray-50 rounded-md shadow-lg border text-gray-800 row-span-1 col-span-1'>
            <div className='flex flex-row w-full items-center gap-2'>
              <div className='flex p-2 items-center rounded-md bg-green-500'>
                <box-icon type='solid' name='wallet' size='20px' color='white'></box-icon>
              </div>
              <h1 className='font-poppins font-bold text-lg'>Expense</h1>
            </div>
            <h1 className='font-poppins text-2xl font-bold pt-4'>Rp 340.000</h1>
            <h1 className='font-poppins pt-4'>Month's Expense</h1>
          </div>
          <div className='flex flex-col p-4 bg-gray-50 rounded-md shadow-lg border text-gray-800 row-span-4 col-span-1'>
            <div className='flex flex-row w-full items-center gap-2'>
              <div className='flex p-2 items-center rounded-md bg-green-500'>
                <box-icon type='solid' name='wallet' size='20px' color='white'></box-icon>
              </div>
              <h1 className='font-poppins font-bold text-lg'>Month's Budget</h1>
            </div>
            <h1 className='font-poppins text-2xl font-bold pt-4'>Rp 340.000</h1>
            <h1 className='font-poppins pt-4'>Rp 340.000</h1>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Dashboard

