import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  validateAtGateway: defineAction({
    accept: "form",
    input: z.object({
      user: z.string(),
      password: z.string()
    }),
    handler: async (input) => {
      const expectedUser: string | undefined = import.meta.env.DEMO_USER;
      const expectedPass: string | undefined = import.meta.env.DEMO_PASSWORD;
      const user = input.user;
      const password = input.password;

      if (user === expectedUser && password === expectedPass) {
        return { auth: true, code: 303 };
      } else {
        return { auth: false, code: 302 };
      }
    }
  })
};
