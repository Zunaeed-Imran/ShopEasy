@extends('admin.layouts.app')

@section('title')
  Reviews
@endsection

@section('content')
<div class="row">
  @include('admin.layouts.sidebar')
  <div class="col-md-9">
    <div class="row mt-2">
      <div class="col-md-12">
        <div class="card-header bg-white d-flex justify-content-between align-items-center">
          <h1 class="mt-2">Reviews ({{$reviews->count()}})</h1>
        </div>
        <hr>
        {{-- table of colors --}}
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">Rating</th>
                <th scope="col">Approved</th>
                <th scope="col">Coupon</th>
                <th scope="col">By</th>
                <th scope="col">Product Name</th>
                <th scope="col">Created</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              @foreach ($reviews as $key => $review)
              <tr>
                <td scope="row">{{$key += 1}}</td>
                <td scope="row">{{$review->title}}</td>
                <td scope="col">{{$review->body}}</td>
                <td scope="col">{{$review->rating}}</td>
                <td scope="col">
                  @if($review->approved)
                    <span class="badge bg-success">
                      Yes
                    </span>
                  @else
                    <span class="badge bg-danger">
                      No
                    </span>  
                  @endif
                </td>
                <td scope="col">{{$review->user->name}}</td>
                <td scope="col">By</td>
                <td scope="col">
                  <img 
                  src="{{asset($review->product->thumbnail)}}"
                  alt={{$review->product->name}} 
                  class="rounded" width="60" height="60">
                </td>
                <td scope="col">{{$review->created_at}}</td>
                <td>
                  <a href="#" onclick="deleteItem({{$review->id}})" class="btn btn-sm btn-danger">
                    <i class="fas fa-trash"></i>
                  </a>
                  <form id="{{$review->id}}" action="{{route('admin.reviews.delete', $review->id)}}" method="post">
                    @csrf
                    @method('DELETE')
                  </form>
                </td>
              </tr>
              @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection