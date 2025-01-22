<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    // Display all the orders.
    public function index()
    {
        $orders = Order::with(['products', 'user', 'coupon'])->latest()->get();
        return view('admin.orders.index')->with([
            'orders' => $orders
        ]);
    }

    // Update the Orders delivered at date.
    public function updateDeliveredAtDate(Order $order)
    {
        $order->update([
            'delivered_at' => Carbon::now()
        ]);
        return redirect()->route('admin.orders.index')->with([
            'success' => 'Order Update Successfully'
        ]);
    }

    // Delete Orders.
    public function delete(Order $order)
    {
        $order->delete();
        return redirect()->route('admin.orders.index')->with([
            'success' => 'Order delete Successfully'
        ]);
    }
}
