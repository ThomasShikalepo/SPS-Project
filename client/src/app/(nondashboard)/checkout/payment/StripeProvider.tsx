import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import { useCreateStripePaymentIntentMutation } from "@/state/api";
import { useCurrentCourse } from "@/hooks/useCurrentCourse";
import Loading from "@/components/Loading";

// Ensure the Stripe public key is set in environment variables
if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not set");
}

// Initialize Stripe with the public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// Define custom appearance for the our Elements UI
const appearance: Appearance = {
  theme: "stripe", 
  variables: {
    colorPrimary: "#0570de", 
    colorBackground: "#18181b", 
    colorText: "#d2d2d2", 
    colorDanger: "#df1b41", 
    colorTextPlaceholder: "#6e6e6e",
    fontFamily: "Inter, system-ui, sans-serif", 
    spacingUnit: "3px", 
    borderRadius: "10px", 
    fontSizeBase: "14px", 
  },
};

// StripeProvider component wraps children with Stripe Elements context
const StripeProvider = ({ children }: { children: React.ReactNode }) => {
  const [clientSecret, setClientSecret] = useState<string | "">(""); // Holds the client secret from backend
  const [createStripePaymentIntent] = useCreateStripePaymentIntentMutation(); // Custom hook to create payment intent
  const { course } = useCurrentCourse(); // Get current course data

  useEffect(() => {
    if (!course) return; // Exit if no course is selected

    // Create payment intent with backend API
    const fetchPaymentIntent = async () => {
      const result = await createStripePaymentIntent({
        amount: course?.price ?? 9999999999999, // Use course price or a fallback
      }).unwrap();

      setClientSecret(result.clientSecret); // Store the client secret for Stripe Elements
    };

    fetchPaymentIntent(); // Call the function when course is available
  }, [createStripePaymentIntent, course?.price, course]);

  // Define Stripe Elements options with appearance and client secret
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  // Show loading spinner until client secret is available
  if (!clientSecret) return <Loading />;

  // Provide Stripe context to child components
  return (
    <Elements stripe={stripePromise} options={options} key={clientSecret}>
      {children}
    </Elements>
  );
};

export default StripeProvider;
