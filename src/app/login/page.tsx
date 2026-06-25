import type { Metadata } from "next";

import { Logo } from "@/components/logo";
import { Card, CardContent } from "@/components/ui/card";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = { title: "Вход" };

export default function LoginPage() {
  return (
    <section className="brand-gradient">
      <div className="container flex min-h-[70vh] flex-col items-center justify-center py-16">
        <Card className="w-full max-w-md">
          <CardContent className="p-7">
            <Logo showText={false} />
            <h1 className="mt-4 text-2xl font-bold tracking-tight">
              Вход в «Истоки успеха»
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Войдите или зарегистрируйтесь, чтобы открыть личный кабинет.
            </p>
            <div className="mt-6">
              <AuthForm />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
