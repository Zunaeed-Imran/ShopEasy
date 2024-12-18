@extends('admin.layouts.app')

@section('title')
  Dashboard
@endsection

@section('content')
  @include('admin.layouts.sidebar')
  <div class="col-md-9">
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="card-header bg-white">
          <h1 class="mt-2">Dashboard</h1>
        </div>
        <div class="card-body">
          <div class="row mb-2">
            <div class="col-md-6 mb-2">
             <div class="card shadow-sm">
              <div class="card-header bg-white">
                <div class="d-flex justify-content-between">
                  <strong class="badge bg-dark">
                    Today's Orders
                  </strong>
                  <span class="badge bg-dark">
                    {{ $todayOrders->count() }}
                  </span>
                </div>
              </div>
              <div class="card-footer text-center bg-white">
                <div class="d-flex justify-content-between">
                  <strong>
                    {{$todayOrders->sum('total')}}
                  </strong>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection