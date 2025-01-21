import { z } from "zod"

export const StoreSchema = z.object({
  name: z.string().min(2).max(255),
})
