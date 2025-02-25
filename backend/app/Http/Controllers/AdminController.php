<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Requests\AuthAdminRequest;

class AdminController extends Controller
{
    //
    // fetch and display today yesterday this month this year orders 
    public function index()
    {
        // get today's orders.
        $todayOrders = Order::whereDay('created_at', Carbon::today())->get();
        $yesterdayOrders = Order::whereDay('created_at', Carbon::yesterday())->get();
        $monthOrders = Order::whereMonth('created_at', Carbon::now()->month)->get();
        $yearOrders = Order::whereYear('created_at', Carbon::now()->year)->get();

        return view('admin.index')->with([
            'todayOrders' => $todayOrders,
            'yesterdayOrders' => $yesterdayOrders,
            'monthOrders' => $monthOrders,
            'yearOrders' => $yearOrders
        ]);
    }

    // Display the login form.
    public function login()
    {
        if (!auth()->guard('admin')->check()) {
            return view('admin.login');
        }
        return redirect('admin/dashboard');
    }

    // Auth Admin.
    public function auth(AuthAdminRequest $request)
    {
        if ($request->validated()) {
            if (auth()->guard('admin')->attempt([
                'email' => $request->email,
                'password' => $request->password,
            ])) {
                $request->session()->regenerate();
                return redirect()->route('admin.index');
            } else {
                return redirect()->route('admin.login')->with([
                    'error' => 'These Credensial do not match our records'
                ]);
            }
        }
    }

    // Logout the admin
    public function logout()
    {
        auth()->guard('admin')->logout(); // Add parentheses here
        return redirect()->route('admin.index');
    }

}
