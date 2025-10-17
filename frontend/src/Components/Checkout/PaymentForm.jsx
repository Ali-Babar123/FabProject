"use client"

import { useState } from "react"

const PaymentForm = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    paymentMethod: "check",
    agreeToTerms: false,
    confirmCalculations: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Payment Method</h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 border border-gray-200 p-3 rounded-md bg-gray-50">
            <input
              type="radio"
              id="check"
              name="paymentMethod"
              value="check"
              checked={formData.paymentMethod === "check"}
              onChange={handleChange}
              className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
            />
            <label htmlFor="check" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-medium">Check Payment</span>
            </label>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <p className="text-sm text-blue-800">
              <strong>Check Payment Instructions:</strong><br />
              Please send a check for the total amount to:<br />
              <br />
              FabbHome<br />
              123 Design Street<br />
              Creative City, CC 12345<br />
              <br />
              Include your order number in the memo field. Your order will be processed once payment is received and cleared.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 p-4 rounded-md bg-gray-50">
        <p className="text-sm text-gray-700">
          Have you calculated the right amount? Do not fall short as ordering more wallpaper at a later date may result
          in color matching issues. Need help or want us to double check your math? Get in touch with Customer Support
          via chat or email.
        </p>
        <div className="flex items-start space-x-2 mt-4">
          <input
            type="checkbox"
            id="confirmCalculations"
            name="confirmCalculations"
            checked={formData.confirmCalculations}
            onChange={handleChange}
            className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
          />
          <label htmlFor="confirmCalculations" className="text-xs font-medium">
            Yes, I am confident my calculations are correct.*
          </label>
        </div>
      </div>

      <div className="border border-gray-200 p-4 rounded-md bg-gray-50">
        <p className="text-sm text-gray-700">
          Your personal data will be used to process your order, support your experience throughout this website, and
          for other purposes described in our Privacy policy.
        </p>
        <div className="flex items-start space-x-2 mt-4">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
          />
          <label htmlFor="agreeToTerms" className="text-xs font-medium">
            I have read and agree to the website{" "}
            <a href="/terms" className="underline">
              Terms and conditions
            </a>
            *
          </label>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          PREVIOUS
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          disabled={!formData.agreeToTerms || !formData.confirmCalculations}
        >
          PLACE ORDER
        </button>
      </div>
    </form>
  )
}

export default PaymentForm
