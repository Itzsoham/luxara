"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { ActionResponse } from "@workspace/types/index"
import { ZodType, z } from "zod"
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form"
import { useRouter } from "next/navigation"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form"
import Link from "next/link"
import ROUTES from "@/constants/routes"
import { toast } from "@workspace/ui/hooks/use-toast"

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>
  defaultValues: T
  onSubmit: (data: T) => Promise<ActionResponse>
  formType: "LOGIN" | "SIGN_UP"
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const router = useRouter()

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  })

  const handleSubmit: SubmitHandler<T> = async data => {
    const result = (await onSubmit(data)) as ActionResponse
    if (result?.success) {
      toast({
        title: "Success",
        description:
          formType === "LOGIN"
            ? "Loging in successfully"
            : "Signing up successfully",
      })
      router.push(ROUTES.HOME)
    } else {
      toast({
        title: `Error ${result?.status || ""}`,
        description: result?.error?.message || "An error occurred",
        variant: "destructive",
      })
    }
  }

  const buttonText = formType === "LOGIN" ? "Login" : "Sign Up"
  return (
    <>
      <div className="flex flex-col gap-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="flex flex-col gap-4">
              {Object.keys(defaultValues).map(field => (
                <FormField
                  key={field}
                  control={form.control}
                  name={field as Path<T>}
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-0">
                      <FormLabel>
                        {field.name === "email"
                          ? "Email Address"
                          : field.name.charAt(0).toUpperCase() +
                            field.name.slice(1)}
                      </FormLabel>
                      <FormControl>
                        <Input
                          required
                          type={field.name === "password" ? "password" : "text"}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              {/* <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div> */}

              <Button
                disabled={form.formState.isSubmitting}
                className="primary-gradient paragraph-medium mt-2 min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
              >
                {form.formState.isSubmitting
                  ? buttonText === "Login"
                    ? "Loging In..."
                    : "Signing Up..."
                  : buttonText}
              </Button>
            </div>
          </form>
        </Form>
        {formType === "LOGIN" ? (
          <span className=" text-sm ">
            Don&apos;t have an account?{" "}
            <Link
              href={ROUTES.SIGN_UP}
              className="underline underline-offset-4"
            >
              Sign up
            </Link>
          </span>
        ) : (
          <span className=" text-sm ">
            Already have an account?{" "}
            <Link href={ROUTES.LOGIN} className="underline underline-offset-4">
              Log in
            </Link>
          </span>
        )}
      </div>
    </>
  )
}

export default AuthForm
