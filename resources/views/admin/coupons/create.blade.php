@extends('admin.layouts.app')

@section('title')
Add new coupon
@endsection

@section('content')
<div class="row">
  @include('admin.layouts.sidebar')
  <div class="col-md-9">
    <div class="row mt-2">
      <div class="col-md-12">
        <div class="card-header bg-white">
          <h1 class="mt-2">Add Coupon</h1>
          <hr>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <form action="{{ route('admin.coupons.store') }}" method="post">
                @csrf
                <div class="form-group mb-3">
                  <label for="name" class="form-label">Coupon</label>
                  <input type="name" class="form-control @error('name')
                                                      is-invalid
                                                    @enderror" id="name" name="name" placeholder="Enter Coupon" value="{{old('name')}}">
                  @error('name')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                {{-- Discount --}}
                <div class="form-group mb-3">
                  <label for="name" class="form-label">Discount</label>
                  <input type="name" class="form-control @error('discount')
                                                      is-invalid
                                                    @enderror" id="discount" name="discount" placeholder="Discount" value="{{old('discount')}}">
                  @error('discount')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                {{-- Validation --}}
                <div class="form-group mb-3">
                  <label for="name" class="form-label">Validity</label>
                  <input type="datetime-local" class="form-control @error('valid_until')
                                                      is-invalid
                                                    @enderror" id="valid_until" name="valid_until" placeholder="Validity" value="{{old('valid_until')}}">
                  @error('valid_until')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                <button type="submit" class="btn btn-dark d-block mx-auto">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection