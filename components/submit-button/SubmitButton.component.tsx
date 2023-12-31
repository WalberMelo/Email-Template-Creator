"use client";

export function SubmitButton() {
  return (
    <button
      data-testid="submit-form--btn"
      type="submit"
      className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md btn-pointer"
    >
      Submit
    </button>
  );
}
