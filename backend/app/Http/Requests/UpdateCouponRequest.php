<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCouponRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */

    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'max:255',
                Rule::unique('coupons', 'name')->ignore($this->route('coupon')),
            ],
            'discount' => 'required|numeric|min:0',
            'valid_until' => 'required|date',
        ];
    }

    public function messages()
    {
        return [
            // for the validy message
            'valid_until.required' => 'The coupon validity is required',
        ];
    }
}
