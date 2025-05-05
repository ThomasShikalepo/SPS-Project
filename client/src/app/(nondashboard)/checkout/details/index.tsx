"use client "

import Loading from '@/components/Loading';
import { useCurrentCourse } from '@/hooks/useCurrentCourse';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const CheckoutDetailPage = () => {

    const {course: selectedCourse, isLoading, isError} = useCurrentCourse()

    const searchParams = useSearchParams();
    const showSignUp = searchParams.get("showSignUp") === "true"

    if(isLoading) return <Loading />
    if (isError) return <div>Failed to fetch data</div>
    if (!selectedCourse) return <div>course not found</div>
         
  return (
    <div>CheckoutDetailPage</div>
  )
}

export default CheckoutDetailPage