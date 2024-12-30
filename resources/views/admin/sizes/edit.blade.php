@extends('admin.layouts.app')

@section('title')
Edit Size
@endsection

@section('content')
<div class="row">
  @include('admin.layouts.sidebar')
  <div class="col-md-9">
    <div class="row mt-2">
      <div class="col-md-12">
        <div class="card-header bg-white">
          <h1 class="mt-2">Edit Size</h1>
          <hr>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <form action="{{ route('admin.sizes.update', $size->id) }}" method="post">
                @csrf
                @method('PUT')
                <div class="form-group mb-3">
                  <label for="name" class="form-label">Edit Size</label>
                  <input type="text" class="form-control 
                    @error('name')
                      is-invalid
                    @enderror" 
                      id="name" 
                      name="name" 
                      placeholder="Enter Size"
                      value="{{$size->name, old('name')}}">
                    @error('name')
                      <span class="invalid-feedback">
                        <strong>{{ $message }}</strong>
                      </span>
                    @enderror
                </div>
                <button type="submit" class="btn btn-dark d-block mx-auto">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection