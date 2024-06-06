import { z } from 'zod'

const schemaHole = z.object({
  sector: z.string(),
  main_street: z.string(),
  secondary_street: z.string().optional(),
  size: z.string()
})

const schemaUpdateHole = z.object({
  sector: z.string().optional(),
  main_street: z.string().optional(),
  secondary_street: z.string().optional(),
  size: z.string().optional()
})

export const validateHole = (data) => {
  const isValid = schemaHole.safeParse(data)
  if (isValid.success) {
    return isValid.data
  } else {
    throw isValid.error
  }
}

export const validateUpdateHole = (data) => {
  const isValid = schemaUpdateHole.safeParse(data)
  if (isValid.success) {
    return isValid.data
  } else {
    throw isValid.error
  }
}
