import createMiddleware from "next-intl/middleware";

import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Tout sauf les API, fichiers statiques et internes Next
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
