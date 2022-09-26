import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from '../components/Checkout';

const stripePromise = loadStripe('pk_test_51LmD6gI3mZAgMpHCppN92V7fSjbS6ONSXzNXajquH03zAY9LZYzm95feSpwwBPWve1NIXdXwytu9gZnicPe7Bazm0030gXbkph');

export default function CheckoutWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}