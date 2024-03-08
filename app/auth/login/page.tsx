import LoginWithGoogleBtn from "@/components/auth/login-with-google-btn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main className="grid min-h-[60vh] gap-10 md:grid-cols-2">
      <div className="hidden w-full flex-col rounded bg-zinc-950 p-10 text-white md:flex md:justify-end">
        <p>
          &quot;Never underestimate the power of a meaningful message. Login to
          reconnect with loved onces and create memories that last.&quot;
        </p>
        <footer>Dipesh B C</footer>
      </div>

      <div className="flex flex-col justify-center space-y-6 mx-auto">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Login to your account
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose one of the following options to continue
          </p>
        </div>
        <LoginWithGoogleBtn />
      </div>
    </main>
  );
}
