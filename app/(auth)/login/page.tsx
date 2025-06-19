"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    // Cek dummy user (bisa dari localStorage)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (
        parsedUser.email === data.email &&
        parsedUser.password === data.password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/dashboard");
      } else {
        alert("Email/password salah");
      }
    } else {
      alert("User belum terdaftar");
    }
  };

  return (
    <main className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
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
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </main>
  );
}
