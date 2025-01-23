<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    // Get all the review.
    public function index(){
        return view('admin.reviews.index')->with([
            'reviews' => Review::latest()->get()
        ]);
    }

    // Approved and disapprove reviews
    public function toggleApprovedStatus(Review $review, $status)
    {
        $review->update([
            'approved' => $status
        ]);

        return redirect()->route('admin.reviews.index')->with([
            'success' => 'Review has been updated successfully'
        ]);
    }

    // Delete Reviews
    public function delete(Review $review)
    {
        $review->delete();
        return redirect()->route('admin.reviews.index')->with([
            'success' => 'Review has been deleted successfully'
        ]);
    }
}
