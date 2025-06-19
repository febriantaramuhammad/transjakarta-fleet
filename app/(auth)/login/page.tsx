'use client'
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const onSubmit = (data: any) => {
    localStorage.setItem("user", JSON.stringify(data))
    router.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10">
      <input {...register("email")} placeholder="Email" className="border p-2 w-full mb-4" />
      <input {...register("password")} type="password" placeholder="Password" className="border p-2 w-full mb-4" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>
  )
}
