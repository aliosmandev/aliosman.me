import { createClient } from "@postiva/client";

export const postivaClient = createClient(
  process.env.NEXT_PUBLIC_POSTIVA_CLIENT_ID as string,
  process.env.NEXT_PUBLIC_POSTIVA_CLIENT_API_KEY as string
);
