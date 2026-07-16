import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

type FormData = {
  name: string
  email: string
  company: string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    alert("Message sent successfully!")
  }

  return (
    <section id="contact-form" className="py-24 bg-white px-8">
      <motion.div 
        className="max-w-[700px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-10 text-center">
          <span className="text-[12px] font-semibold tracking-[0.15em] text-[#2F6BFF] uppercase">Contact Us</span>
          <h2 className="text-[40px] font-bold text-[#111111] mt-2 leading-[1.2] tracking-tight">
            Let's start a <span className="text-[#2F6BFF] italic">conversation</span>
          </h2>
          <p className="text-[15px] text-[#666] mt-4">Fill out the form below and our team will get back to you.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-[#111]">Full Name</label>
              <input 
                {...register("name", { required: "Name is required" })}
                className="border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2F6BFF]"
                placeholder="John Doe"
              />
              {errors.name && <span className="text-red-500 text-[12px]">{errors.name.message}</span>}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-[#111]">Email Address</label>
              <input 
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                })}
                className="border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2F6BFF]"
                placeholder="john@company.com"
              />
              {errors.email && <span className="text-red-500 text-[12px]">{errors.email.message}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#111]">Company (Optional)</label>
            <input 
              {...register("company")}
              className="border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2F6BFF]"
              placeholder="Your Company"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-semibold text-[#111]">Message</label>
            <textarea 
              {...register("message", { required: "Message is required" })}
              className="border border-[#E0E0E0] rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2F6BFF] min-h-[120px]"
              placeholder="How can we help you?"
            />
            {errors.message && <span className="text-red-500 text-[12px]">{errors.message.message}</span>}
          </div>

          <motion.button 
            type="submit"
            className="bg-[#2F6BFF] text-white text-[14px] font-semibold px-8 py-4 rounded-full transition-colors mt-2"
            whileHover={{ scale: 1.02, backgroundColor: "#1a55e8" }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}
