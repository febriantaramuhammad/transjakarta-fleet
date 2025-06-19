"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Registrasi berhasil! Silakan login.");
    router.push("/login");
  };

  return (
    <main className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </main>
  );
}
