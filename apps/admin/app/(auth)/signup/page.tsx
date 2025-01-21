"use client"

import { z } from "zod"

import AuthForm from "@/components/forms/AuthForm"

export default function SignUp() {
  const SignUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(3),
  })
  function signInWithCredentials(data: { email: string; password: string }) {
    console.log(data)

    return Promise.resolve({ success: true })
  }

  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ name: "", email: "", password: "" }}
      onSubmit={signInWithCredentials}
    />
  )
}
