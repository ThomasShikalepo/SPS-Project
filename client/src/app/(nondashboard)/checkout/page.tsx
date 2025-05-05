"use client"

import React from 'react'
import Loading from '@/components/Loading'
import { useUser } from '@clerk/nextjs'
import WizardStepper from '@/components/WizardStepper'
import { useCheckoutNavigation } from '@/hooks/useCheckoutNavigation'
import CheckoutDetailPage from './details'


const CheckoutWizard = () => {
  
  const {isLoaded} = useUser()
  const {checkoutStep} = useCheckoutNavigation()

  if(!isLoaded) return <Loading/>


//   this check on which step we are on the checkout page
  const renderStep = () => {
    switch (checkoutStep) {
        case 1:
            return <CheckoutDetailPage />
        case 2: 
            return <paymentPage/>
        case 3: 
            return "completion page"
        default:
            return "checkout details page"
    }
  }
    
    
    return (
    <div className='checkout'>
        <WizardStepper currentStep = {checkoutStep} />
        <div className='checkout__content'>
            {renderStep()}
        </div>
    </div>
  )
}

export default CheckoutWizard
