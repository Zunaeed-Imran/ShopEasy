<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    // Store new Order
    public function store(Request $request)
    {
        foreach ($request->products as $product){
            $order = Order::create([
                'qty' => $product['qty'],
                'user_id' => $request->user->id,
                'coupon_id' => $product['coupon_id'],
                'total' => $this->calculateTotal($product['price'], $product['qty'], $product['coupon_id']),
            ]);
          $order->products()->attach($product['product_id']);
        }
      return response()->json([
        'user' => UserResource::make($request->user())
      ]);  
    }
    // 
}
