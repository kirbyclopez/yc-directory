import { Author, Startup } from "@/sanity/types";

export type StartupPostType = Omit<
  Startup,
  "author" | "_type" | "_rev" | "_updatedAt" | "pitch"
> & { author?: Omit<Author, "_createdAt" | "_type" | "_rev" | "_updatedAt"> };
