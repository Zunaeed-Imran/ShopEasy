<?php

namespace App\Http\Controllers\Api;

use App\Models\Size;
use App\Models\Color;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use SebastianBergmann\CodeCoverage\Report\Html\Colors;

class ProductController extends Controller
{
    // Get all the products
    public function index(){
        return ProductResource::collection(Product::with(['colors', 'sizes', 'reviews'])->latest()->get())->additional([
            'colors' => Color::has('products')->get(),
            'sizes' => Size::has('products')->get(),
        ]);
    }
    // Get product by slug
    public function show(Product $product)
    {
        if(!$product){
            abort(404);
        }
        return ProductResource::make(
            $product->load(['colors', 'sizes', 'reviews'])
        );
    }
    // filter Product by color
    public function filterProductsByColor(Color $color){
        return ProductResource::collection(
            $color->products()->with(['colors','sizes','reviews'])->latest()->get())->additional([
                'colors' => Color::has('products')->get(),
                'sizes' => Size::has('products')->get(),
            ]);
    }
    // filter Product by size
    public function filterProductsBySize(Size $size){
        return ProductResource::collection(
            $size->products()->with(['colors','sizes','reviews'])->latest()->get())->additional([
                'colors' => Color::has('products')->get(),
                'sizes' => Size::has('products')->get(),
            ]);
    }
    // filter product for price.
    public function filterProducts(Request $request)
    {
        $query = Product::query();

        if ($request->has('color') && !empty($request->color)) {
            $query->whereHas('colors', function ($q) use ($request) {
                $q->where('colors.id', $request->color);  // Ensure the column name is correct
            });
        }

        if ($request->has('size') && !empty($request->size)
        ) {
            $query->whereHas('sizes', function ($q) use ($request) {
                $q->where('sizes.id', $request->size);
            });
        }

        if ($request->has('searchTerm') && !empty($request->searchTerm)) {
            $query->where('name', 'LIKE', '%' . $request->searchTerm . '%');
        }

        if ($request->has('min_price') && $request->min_price) {
            $query->where('price', '>=', $request->min_price);
        }

        if ($request->has('max_price') && $request->max_price) {
            $query->where('price', '<=', $request->max_price);
        }

        $products = $query->with(['colors', 'sizes', 'reviews'])->latest()->get();

        return ProductResource::collection($products)->additional([
            'colors' => Color::has('products')->get(),
            'sizes' => Size::has('products')->get(),
        ]);
    }




    // search for products by terms
    public function findProductsByTerm($searchTerm)
    {
        return ProductResource::collection(
            Product::where('name', 'LIKE', '%'.$searchTerm.'%')
            ->with(['colors', 'sizes', 'reviews'])
            ->latest()->get())
            ->additional([
                'colors' => Color::has('products')->get(),
                'sizes' => Size::has('products')->get(),
            ]);
    }
}
