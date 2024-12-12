<?php

use App\Http\Controllers\AdminAdminController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [AdminAdminController::class, 'login'])->name('admin.login');
Route::post('admin/auth', [AdminAdminController::class, 'auth'])->name('admin.auth');
Route::middleware('admin');