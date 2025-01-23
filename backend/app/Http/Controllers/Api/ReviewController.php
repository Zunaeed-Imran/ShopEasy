<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    // Store new Review
    public function store()
    {
        $exist = $this->checkIfUserAlreadyReviewedTheProduct($request->product_id, $request->user()->id);
        if($exist){
            return response()->json([
                'error' => 'You have already reviewed this product'
            ]);
        }else{
            Review::create([
                'product_id' => $request->product_id,
                'user_id' => $request->user()->id,
                'title' => $request->title,
                'body' => $request->body,
                'rating' => $request->rating
            ]);
            return response()->json([
                'message' => 'Your review has been added Succesfully and will be published soon'
            ]);
        }
    }

    public function checkIfUserAlreadyReviewedTheProduct($product_id, $user_id)
    {
        // check if review already exists. 
        $exist = Review::where([
            'product_id' => $product_id,
            'user_id' => $user_id
        ])->exists();
        // return the result.
        return $exist;
    }

    // Update Review
    public function update(Request $request, Review $review)
    {
        $exist = $this->checkIfUserAlreadyReviewedTheProduct($request->product_id, $request->user()->id);
        if ($exist){
            Review::create([
                'product_id' => $request->product_id,
                'user_id' => $request->user()->id,
                'title' => $request->title,
                'body' => $request->body,
                'rating' => $request->rating
            ]);
            return response()->json([
                'message' => 'Your review has been added Succesfully and will be published soon'
            ]);
        }
    }

}
