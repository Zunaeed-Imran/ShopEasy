@extends('admin.layouts.app')

@section('title')
Add new Product
@endsection

@section('content')
<div class="row">
  @include('admin.layouts.sidebar')
  <div class="col-md-9">
    <div class="row mt-2">
      <div class="col-md-12">
        <div class="card-header bg-white">
          <h1 class="mt-2">Add Product</h1>
          <hr>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <form action="{{ route('admin.products.store') }}" method="post" enctype="multipart/form-data">
                @csrf
                <div class="form-group mb-3">
                  <label for="name" class="form-label">Product</label>
                  <input type="text" class="form-control 
                  @error('name')
                    is-invalid
                  @enderror" id="name" name="name" placeholder="Enter Name" value="{{old('name')}}">
                  @error('name')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                {{-- for quantity --}}
                <div class="form-group mb-3">
                  <label class="form-label">Quantity</label>
                  <input type="number" class="form-control 
                  @error('qty')
                    is-invalid
                  @enderror" id="qty" name="qty" placeholder="Enter qty" value="{{old('qty')}}">
                  @error('qty')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                {{-- for price --}}
                <div class="form-group mb-3">
                  <label class="form-label">Price</label>
                  <input type="number" class="form-control 
                  @error('price')
                    is-invalid
                  @enderror" id="price" name="price" placeholder="Enter Price" value="{{old('price')}}">
                  @error('price')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                {{-- for color --}}
                <div class="form-group mb-3">
                  <label for="color_id" class="my-2">Choose a color</label>
                  <select 
                    name="color_id[]" 
                    id="color_id" 
                    class="form-control 
                      @error('color_id')
                        is-invalid
                      @enderror"
                    multiple
                    >
                      @foreach ($colors as $color)
                          <option @if(collect(old('color_id'))->contains($color->id)) selected @endif
                            value="{{$color->id}}">
                            {{$color->name}}
                          </option>
                      @endforeach
                      @error('color_id')
                        <span class="invalid-feedback">
                          <strong>{{ $message }}</strong>
                        </span>
                      @enderror
                  </select>
                </div>
                {{-- for size id --}}
                <div class="form-group mb-3">
                  <label for="color_id" class="my-2">Choose a size</label>
                  <select 
                    name="size_id[]" 
                    id="size_id" 
                    class="form-control 
                      @error('size_id')
                        is-invalid
                      @enderror"
                    multiple
                    >
                      @foreach ($sizes as $size)
                          <option @if(collect(old('size_id'))->contains($size->id)) selected @endif
                            value="{{$size->id}}">
                            {{$size->name}}
                          </option>
                      @endforeach
                      @error('size_id')
                        <span class="invalid-feedback">
                          <strong>{{ $message }}</strong>
                        </span>
                      @enderror
                  </select>
                </div>
                {{-- for description --}}
                 <div class="form-group mb-3">
                  <label class="form-label">Description</label>
                  <textarea 
                  rows="10" 
                  type="text" 
                  class="form-control 
                  summernote
                  @error('desc')
                    is-invalid
                  @enderror" id="desc" name="desc" placeholder="Description"
                  >
                  {{old('desc')}}
                  </textarea>
                  @error('desc')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                {{-- for thumbnail image --}}
                <div class="form-group mb-3">
                  <label class="form-label">Thumbnail</label>
                  <input type="file" class="form-control 
                  @error('thumbnail')
                    is-invalid
                  @enderror" id="thumbnail" name="thumbnail"
                  >
                  @error('thumbnail')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                <div class="mt-2">
                  <img 
                  src="#" 
                  id="thumbnail_preview" 
                  class="d-none img-fluid rounded mb-2"
                  width="100"
                  height="100"
                  >
                </div>
                {{-- for first image --}}
                <div class="form-group mb-3">
                  <label class="form-label">First Image</label>
                  <input type="file" class="form-control 
                  @error('first_image')
                    is-invalid
                  @enderror" id="first_image" name="first_image"
                  >
                  @error('first_image')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                <div class="mt-2">
                  <img 
                  src="#" 
                  id="first_image_preview" 
                  class="d-none img-fluid rounded mb-2"
                  width="100"
                  height="100"
                  >
                </div>
                {{-- for second image --}}
                <div class="form-group mb-3">
                  <label class="form-label">Second Image</label>
                  <input type="file" class="form-control 
                  @error('second_image')
                    is-invalid
                  @enderror" id="second_image" name="second_image"
                  >
                  @error('second_image')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                <div class="mt-2">
                  <img 
                  src="#" 
                  id="second_image_preview" 
                  class="d-none img-fluid rounded mb-2"
                  width="100"
                  height="100"
                  >
                </div>
                {{-- for third image --}}
                <div class="form-group mb-3">
                  <label class="form-label">Third Image</label>
                  <input type="file" class="form-control 
                  @error('third_image')
                    is-invalid
                  @enderror" id="third_image" name="third_image"
                  >
                  @error('third_image')
                  <span class="invalid-feedback">
                    <strong>{{ $message }}</strong>
                  </span>
                  @enderror
                </div>
                <div class="mt-2">
                  <img 
                  src="#" 
                  id="third_image_preview" 
                  class="d-none img-fluid rounded mb-2"
                  width="100"
                  height="100"
                  >
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