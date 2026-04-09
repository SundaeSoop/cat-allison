import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export type SessionData = {
  isAdmin: boolean;
};

export const sessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "cat-allison-admin",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}
