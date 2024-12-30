<?php

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
        // colors route
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
        // sizes route
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
        // coupons route
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
        // products route
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
    });
});