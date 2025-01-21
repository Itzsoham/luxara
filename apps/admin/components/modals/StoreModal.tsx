"use client"

import { closeModal } from "@/state"

import { useAppDispatch, useAppSelector } from "@/state/redux"
import { zodResolver } from "@hookform/resolvers/zod"
import { StoreSchema } from "@workspace/schema/src"
import { Button } from "@workspace/ui/components/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import Modal from "@workspace/ui/main/modal"
import { useForm } from "react-hook-form"
import { z } from "zod"

const StoreModal = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.global.isOpen)

  const form = useForm<z.infer<typeof StoreSchema>>({
    resolver: zodResolver(StoreSchema),
    defaultValues: {
      name: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof StoreSchema>) => {
    console.log(values)
    //Todo: create store
  }

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={() => dispatch(closeModal())}
    >
      <div className="space-y-4 py-2 pb-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Clothes" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-6 space-x-2 flex items-center justify-end">
              <Button variant="outline" onClick={() => dispatch(closeModal())}>
                Cancel
              </Button>
              <Button type="submit">Continue</Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  )
}

export default StoreModal
