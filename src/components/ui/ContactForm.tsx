import React, { useRef, useState } from 'react';
import { Send, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  forPlant: boolean;
  exPlant: boolean;
  productName: string;
  address1: string;
  address2: string;
  address3: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data submitted:', data);
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div id="quote" className="bg-white rounded-xl shadow-xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-[var(--secondary)]">Get a Quote</h3>

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-8"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="text-green-500 w-8 h-8" />
          </div>
          <h4 className="text-xl font-semibold mb-2">Quote Request Sent!</h4>
          <p className="text-center text-gray-600">
            Thank you for your interest. Our team will get back to you shortly.
          </p>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name*
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <input
              id="phone"
              type="tel"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
          
          <div className="flex space-x-6">
            <div className="flex items-center">
              <input
                id="forPlant"
                type="checkbox"
                className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)]"
                {...register('forPlant')}
              />
              <label htmlFor="forPlant" className="ml-2 block text-sm text-gray-700">
                For Plant
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="exPlant"
                type="checkbox"
                className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)]"
                {...register('exPlant')}
              />
              <label htmlFor="exPlant" className="ml-2 block text-sm text-gray-700">
                Ex Plant
              </label>
            </div>
          </div>
          
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
              Product Name*
            </label>
            <select
              id="productName"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent ${errors.productName ? 'border-red-500' : 'border-gray-300'}`}
              {...register('productName', { required: 'Product name is required' })}
            >
              <option value="">Select a product</option>
              <option value="RMP Non Premix">RMP Non Premix</option>
              <option value="RMP Premix (with boron oxide)">RMP Premix (with boron oxide)</option>
              <option value="RMP Premix (with boric acid)">RMP Premix (with boric acid)</option>
              <option value="150 Mesh Powder">150 Mesh Powder</option>
              <option value="0 to 6 mm Quartz Stone">0 to 6 mm Quartz Stone</option>
              <option value="30-80 mm Powder">30-80 mm Powder</option>
            </select>
            {errors.productName && (
              <p className="mt-1 text-sm text-red-600">{errors.productName.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 1*
            </label>
            <input
              id="address1"
              type="text"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent ${errors.address1 ? 'border-red-500' : 'border-gray-300'}`}
              {...register('address1', { required: 'Address is required' })}
            />
            {errors.address1 && (
              <p className="mt-1 text-sm text-red-600">{errors.address1.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 2
            </label>
            <input
              id="address2"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              {...register('address2')}
            />
          </div>
          
          <div>
            <label htmlFor="address3" className="block text-sm font-medium text-gray-700 mb-1">
              Address Line 3
            </label>
            <input
              id="address3"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              {...register('address3')}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Quote Request
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;