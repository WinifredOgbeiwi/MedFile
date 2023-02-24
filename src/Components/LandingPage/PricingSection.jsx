import React from 'react'
import Headings from './SingleComponent/Headings'
import LiSection from './SingleComponent/LiSection'

function PricingSection() {
  return (
    <section>
      <Headings text='Pricing' />
      <div className='flex justify-center gap-6 mt-12'>

        <div className=' border-2 border-[#B4DFEC] hover:border-[#097192] rounded-lg text-center px-10 py-4'>
          <h2 className='font-medium text-center text-2xl text-text-color pt-2 border-b-[1px] border-black'>Basic</h2>
          <ul className='text-lg font-normal mt-6 space-y-6 capitalize'>
            <LiSection text='patient registration' />
            <LiSection text='appointment scheduling' />
            <LiSection text='Doctor Work Bench' />
            <LiSection text='Nursing Work Bench' />
            <LiSection text='Bay Management / Reception' />
            <LiSection text='Performance Management' />
            <LiSection text='Patient Accounting & Billing' />
          </ul>
          <div class="flex justify-center items-baseline mt-8 mb-2 text-main-color font-semibold">
            <span class="text-5xl ">$900</span>
            <span className='text-2xl'>/month</span>
          </div>
          <p className='text-l text-lg font-normal mb-4 text-[#6A737C]'>Billed monthly</p>
          <button className="text-white bg-main-color hover:bg-[#097192] rounded-lg text-2xl text-center font-semibold py-4 px-20">Select Plan</button>
        </div>

        
        <div className=' border-2 border-[#B4DFEC] hover:border-[#097192] rounded-lg text-center px-10 py-4'>
          <h2 className='font-medium text-center text-2xl text-text-color pt-2 border-b-[1px] border-black'>Premium</h2>
          <ul className='text-lg font-normal mt-6 space-y-6 capitalize'>
            <LiSection text='Basic Features' />
            <LiSection text='Accident & Emergency' />
            <LiSection text='Transfusion Medicine' />
            <LiSection text='Medical Record Department' />
            <LiSection text='Pharmacy Management system' />
            <LiSection text='Patient Portal / Dashboard' />
            <LiSection text='Procedure Scheduling' />
          </ul>
          <div class="flex justify-center items-baseline mt-8 mb-2 text-main-color font-semibold">
            <span class="text-5xl ">$1500</span>
            <span className='text-2xl'>/month</span>
          </div>
          <p className='text-l text-lg font-normal mb-4 text-[#6A737C]'>Billed monthly</p>
          <button className="text-white bg-main-color hover:bg-[#097192] rounded-lg text-2xl text-center font-semibold py-4 px-20">Select Plan</button>
        </div>


        <div className=' border-2 border-[#B4DFEC] hover:border-[#097192] rounded-lg text-center px-10 py-4'>
          <h2 className='font-medium text-center text-2xl text-text-color pt-2 border-b-[1px] border-black'>Custom</h2>
          <ul className='text-lg font-normal mt-6 space-y-6 capitalize'>
            <LiSection text='Basic Features' />
            <LiSection text='Premium Features' />
            <LiSection text='Alert Engine / Messenger' />
            <LiSection text='Equipment Management' />
            <LiSection text='Que Management System' />
            <LiSection text='Application Security' />
            <LiSection text='HR Management System' />
            <LiSection text='Assets Management' />
            <LiSection text='Report Designer' />
          </ul>
          <button className="text-white bg-main-color hover:bg-[#097192] rounded-lg text-2xl text-center font-semibold py-4 px-20 mt-6">Request Quote</button>
        </div>





      </div>
    </section>
  )
}

export default PricingSection
