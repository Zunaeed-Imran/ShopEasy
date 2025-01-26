<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Coupon;
use App\Models\Order;
use ErrorException;
use Illuminate\Http\Request;
use Stripe\PaymentIntent;
use Stripe\Stripe;

class OrderController extends Controller
{
    // Store new Order
    public function store(Request $request)
    {
        foreach ($request->products as $product){
            $order = Order::create([
                'qty' => $product['qty'],
                'user_id' => $request->user()->id,
                'coupon_id' => $product['coupon_id'],
                'total' => $this->calculateTotal($product['price'], $product['qty'], $product['coupon_id']),
            ]);
          $order->products()->attach($product['product_id']);
        }
      return response()->json([
        'user' => UserResource::make($request->user())
      ]);  
    }

    // Pay Order using stripe
    public function payOrderByStripe(Request $request)
    {
      Stripe::setApiKey("sk_test_51QjbU2Ko3om26zX4ZTdhyXKdMYSiu2kn56aqWlXdqkruJP44LHf4BgWsy1R5U4vs7Oe0YUzJoBKfufvbLmqih2nK00zDxL6H36");
      try{
        $paymentIntent = PaymentIntent::create([
          'amount' => $this->calculateOrderTotal($request->cartItems),
          'currency' => 'usd',
          'description' => 'Shop Easy'
        ]);
        // generate the client secret
        $output = [
          'clientSecret' => $paymentIntent->client_secret
        ];
        // send the client secret to the front end.
        return response()->json($output);
      } catch (ErrorException $e){
        return response()->json([
          'error' => $e->getMessage()
        ]);
      }
    }

    // Calculate total order.
    public function calculateOrderTotal($items)
    {
      $total = 0;
      foreach ($items as $item) {
        $total += $this->calculateTotal($item['price'], $item['qty'], $item['coupon_id']);
      }
      return $total  * 100;
    }

  // total calculate
  public function calculateTotal($price, $qty, $coupon_id)
  {
    $total = 0;
    $total = $price * $qty;
    $coupon = Coupon::find($coupon_id);
    if($coupon){
      if($coupon->checkIfValid()){
        $discount = $total * $coupon->discount / 100;
      }
    }
    return $total - $discount;
  }
}
