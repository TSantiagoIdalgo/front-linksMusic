import z from 'zod'


export const userSchema = z.object({
    "User Name": z.string().min(3, 'Name must be at least 3 characters long')
      .max(16, 'Name must be less than 16 characters long'),
    "Email Adress": z.string()
      .email('Invalid email!'),
    "Password": z.string().min(8, 'Must contain at least 8 characters')
      .regex(/[A-Z]/, 'Must contain a capital letter')
      .regex(/[a-z]/, 'Must contain a lowercase letter')
      .regex(/[0-9]/, 'Must contain at least one number')
      .regex(/[^a-zA-Z0-9]/, 'Must contain a special character'),
    "Confirm Password": z.string()
}).refine((data) => data["Password"] === data["Confirm Password"], {
    message: 'Passwords do not match',
    path: ['Confirm Password']
  })


export const loginSchema = z.object({
  "Email Adress": z.string().email(),
  "Password": z.string()
})