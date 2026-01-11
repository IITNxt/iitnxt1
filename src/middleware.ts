import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/about-us",
  "/workshops(.*)/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/support",
  "/programs(.*)",
  "/student-wellness",
  "/career-prep",
]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isStudentRoute = createRouteMatcher(["/student(.*)"]);
const isModeratorRoute = createRouteMatcher(["/moderator(.*)"]);
export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims } = await auth();
  const role = sessionClaims?.metadata?.role;
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
  if (isAdminRoute(req) && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (isModeratorRoute(req) && role !== "MODERATOR") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (isStudentRoute(req) && role !== "STUDENT") {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
