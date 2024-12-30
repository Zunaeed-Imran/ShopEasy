<?php

use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('products', [ProductController::class, 'index']);
Route::get('products/{color}/color', [ProductController::class, 'filterProductsByColor']);
Route::get('products/{size}/size', [ProductController::class, 'filterProductsBySize']);
Route::get('products/{searchTerm}/find', [ProductController::class, 'findProductsByTerm']);
Route::get('products/{product}/show', [ProductController::class, 'show']);
