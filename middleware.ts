// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // ✅ Public routes that don't require sign-in
  publicRoutes: ["/", "/api/webhook/clerk"],

  // ✅ Ignored routes (middleware won't run at all)
  ignoredRoutes: ["/api/webhook/clerk"],
});

export const config = {
  matcher: [
    // Match all routes except static files and _next
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
