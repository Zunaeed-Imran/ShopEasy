<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ColorController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [AdminController::class, 'login'])->name('admin.login');
Route::post('admin/auth', [AdminController::class, 'auth'])->name('admin.auth');

// Route::get('admin/dashboard', [AdminAdminController::class, 'index'])->name('admin.index');

Route::middleware('admin')->group(function () {
    Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.index');
    Route::post('admin/logout', [AdminController::class, 'logout'])->name('admin.logout');
    // colors route
    Route::resource('colors', ColorController::class, [
        'names' => [
            'index' => 'admin.colors.index',
            'create' => 'admin.colors.create',
            'store' => 'admin.colors.store',
            'edit' => 'admin.colors.edit',
            'update' => 'admin.colors.edit',
            'destroy' => 'admin.colors.destroy'
        ]
    ]);
});