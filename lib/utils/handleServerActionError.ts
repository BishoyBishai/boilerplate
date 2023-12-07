import { TServerAction } from "@/models/actions";

export const handleServerActionError = <T>(err: any): TServerAction<T> => {
  console.error(`Error ==>`, err);
  return {
    ok: false,
    error: `Server Error: Please try again later`,
  };
};
