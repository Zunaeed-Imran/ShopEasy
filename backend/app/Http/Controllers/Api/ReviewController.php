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
        $review = Review::where([
            'product_id' => $product_id,
            'user_id' => $user_id
        ])->get();
        // return the result.
        return $review;
    }

    // Update Review
    public function update(Request $request)
    {
        $review = $this->checkIfUserAlreadyReviewedTheProduct($request->product_id, $request->user()->id);
        if ($review){
            $review->update([
                'product_id' => $request->product_id,
                'user_id' => $request->user()->id,
                'title' => $request->title,
                'body' => $request->body,
                'rating' => $request->rating,
                'approved' => 0
            ]);
            return response()->json([
                'message' => 'Your review has been updated Succesfully and will be published soon'
            ]);
        }else{
            return response()->json([
                'error' => 'Something went wrong try again later'
            ]);
        }
    }
    // Delete a review
    public function delete(Request $request) {
        $exist = $this->checkIfUserAlreadyReviewedTheProduct($request->product_id, $request->user()->id);
        if($review){
            $review->delete();
            return response()->json([
                'message' => 'Your review has been delete Succesfully'
            ]);
        }else{
            return response()->json([
                'error' => 'Something went wrong try again later'
            ]);
        }
    }

}
