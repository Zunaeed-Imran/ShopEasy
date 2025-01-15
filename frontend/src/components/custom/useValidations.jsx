
export default function useValidations(errors, filed) {


    const renderErrors = (filed) => (
      errors?.[filed]?.map((error, index) => (
        <div key={index} className="text-white my-2 rounded p-2 bg-danger">
          {error}
        </div>
      ))
    )

  return renderErrors(filed)
}
