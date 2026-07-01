import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.email(),
  message: z.string().min(1),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data); // Object

    reset();
  };

  console.log("isDirty:", isDirty);
  console.log("isValid:", isValid);

  return (
    <div className="p-6 mx-auto mt-10 max-w-md bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Contact Us</h2>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            id="name" 
            {...register("name")} 
            className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name?.message && (
            <p className="text-sm text-red-500">{errors.name?.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            id="email" 
            {...register("email")} 
            className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email?.message && (
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            id="message" 
            {...register("message")} 
            rows="4"
            className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.message?.message && (
            <p className="text-sm text-red-500">{errors.message?.message}</p>
          )}
        </div>

        <button 
          type="submit" 
          disabled={!isValid}
          className="px-4 py-2 w-full font-medium text-white bg-blue-600 rounded-md transition duration-300 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;