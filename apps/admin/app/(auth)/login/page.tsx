"use client"

import { z } from "zod"

import AuthForm from "@/components/forms/AuthForm"

export default function LoginPage() {
  const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  })
  function signInWithCredentials(data: { email: string; password: string }) {
    console.log(data)

    return Promise.resolve({ success: true })
  }

  return (
    <AuthForm
      formType="LOGIN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={signInWithCredentials}
    />
  )
}
