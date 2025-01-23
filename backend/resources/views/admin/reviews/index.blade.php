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
                
                <td>
                  <a href="#" onclick="deleteItem({{$order->id}})" class="btn btn-sm btn-danger">
                    <i class="fas fa-trash"></i>
                  </a>
                  <form id="{{$order->id}}" action="{{route('admin.orders.delete', $order->id)}}" method="post">
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