import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email().min(1, { message: "Email tidak boleh kosong!" }),
    password: z.string().min(1, { message: "Password tidak boleh kosong!" }),
})