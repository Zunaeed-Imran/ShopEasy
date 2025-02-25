@extends('admin.layouts.app')

@section('title')
  Sizes
@endsection

@section('content')
<div class="row">
  @include('admin.layouts.sidebar')
  <div class="col-md-9">
    <div class="row mt-2">
      <div class="col-md-12">
        <div class="py-3 card-header bg-white d-flex justify-content-between align-items-center">
          <h1 class="mt-2">Sizes ({{$sizes->count()}})</h1>
          <a href="{{route('admin.sizes.create')}}" class="btn btn-sm btn-primary">
            <i class="fas fa-plus"></i>
          </a>
        </div>
        <hr>
        {{-- table of colors --}}
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($sizes as $key => $size)
              <tr>
                <th scope="row">{{$key += 1}}</th>
                <td>{{$size->name}}</td>
                <td>
                  <a href="{{route('admin.sizes.edit', $size->id)}}" class="btn btn-sm btn-warning">
                    <i class="fas fa-edit"></i>
                  </a>
                  <a href="#" onclick="deleteItem({{$size->id}})" class="btn btn-sm btn-danger">
                    <i class="fas fa-trash"></i>
                  </a>
                  <form id="{{$size->id}}" action="{{route('admin.sizes.destroy', $size->id)}}" method="post">
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