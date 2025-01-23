<?php

use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ReviewController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SizeController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [AdminController::class, 'login'])->name('admin.login');
Route::post('admin/auth', [AdminController::class, 'auth'])->name('admin.auth');

// Route::get('admin/dashboard', [AdminAdminController::class, 'index'])->name('admin.index');

Route::middleware('admin')->group(function () {
    Route::prefix('admin')->group(function(){
        Route::get('dashboard', [AdminController::class, 'index'])->name('admin.index');
        Route::post('logout', [AdminController::class, 'logout'])->name('admin.logout');

        // Colors routes
        Route::resource('colors', ColorController::class, [
            'names' => [
                'index' => 'admin.colors.index',
                'create' => 'admin.colors.create',
                'store' => 'admin.colors.store',
                'edit' => 'admin.colors.edit',
                'update' => 'admin.colors.update',
                'destroy' => 'admin.colors.destroy'
            ]
        ]);

        // Sizes routes
        Route::resource('sizes', SizeController::class, [
            'names' => [
                'index' => 'admin.sizes.index',
                'create' => 'admin.sizes.create',
                'store' => 'admin.sizes.store',
                'edit' => 'admin.sizes.edit',
                'update' => 'admin.sizes.update',
                'destroy' => 'admin.sizes.destroy'
            ]
        ]);

        // Coupons routes
        Route::resource('coupons', CouponController::class, [
            'names' => [
                'index' => 'admin.coupons.index',
                'create' => 'admin.coupons.create',
                'store' => 'admin.coupons.store',
                'edit' => 'admin.coupons.edit',
                'update' => 'admin.coupons.update',
                'destroy' => 'admin.coupons.destroy'
            ]
        ]);

        // Products routes
        Route::resource('products', ProductController::class, [
            'names' => [
                'index' => 'admin.products.index',
                'create' => 'admin.products.create',
                'store' => 'admin.products.store',
                'edit' => 'admin.products.edit',
                'update' => 'admin.products.update',
                'destroy' => 'admin.products.destroy'
            ]
        ]);
        
        // Orders routes
        Route::get('orders', [OrderController::class, 'index'])->name('admin.orders.index');
        Route::get('update/{order}/order', [OrderController::class, 'updateDeliveredAtDate'])->name('admin.orders.update');
        Route::delete('delete/{order}/order', [OrderController::class, 'delete'])->name('admin.orders.delete');

        // Reviews routes
        Route::get('orders', [ReviewController::class, 'index'])->name('admin.orders.index');
        Route::get('update/{review}/{status}/review', [ReviewController::class, 'toggleApprovedStatus'])->name('admin.reviews.update');
        Route::delete('delete/{review}/review', [ReviewController::class, 'delete'])->name('admin.reviews.delete');
    });
});