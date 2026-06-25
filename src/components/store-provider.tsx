"use client";

import * as React from "react";

export type Consultation = {
  id: string;
  specialist: string;
  role: string;
  date: string;
  time: string;
  topic: string;
  createdAt: string;
};

export type EventBooking = {
  id: string;
  title: string;
  date: string;
  time: string;
  speaker: string;
  createdAt: string;
};

export type User = { name: string; email: string } | null;
export type Subscription = "free" | "premium";

type Persisted = {
  user: User;
  subscription: Subscription;
  consultations: Consultation[];
  events: EventBooking[];
};

type Store = Persisted & {
  hydrated: boolean;
  authOpen: boolean;
  authMessage: string | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  openAuth: (message?: string) => void;
  closeAuth: () => void;
  addConsultation: (c: Omit<Consultation, "id" | "createdAt">) => void;
  addEvent: (e: Omit<EventBooking, "id" | "createdAt">) => void;
  setSubscription: (s: Subscription) => void;
};

const defaultData: Persisted = {
  user: null,
  subscription: "free",
  consultations: [],
  events: [],
};

const genId = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

const StoreContext = React.createContext<Store | null>(null);

export function useStore(): Store {
  const ctx = React.useContext(StoreContext);
  if (!ctx) throw new Error("useStore должен использоваться внутри StoreProvider");
  return ctx;
}

/**
 * Глобальное состояние демо-приложения — только в памяти.
 * Ничего не сохраняется, поэтому при перезагрузке страницы всё сбрасывается
 * к исходному состоянию (выход из аккаунта, тариф, записи и т.д.).
 */
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = React.useState<Persisted>(defaultData);
  const [authOpen, setAuthOpen] = React.useState(false);
  const [authMessage, setAuthMessage] = React.useState<string | null>(null);
  const [hydrated, setHydrated] = React.useState(false);

  // Помечаем готовность после монтирования (без загрузки из хранилища).
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  const value: Store = {
    ...data,
    hydrated,
    authOpen,
    authMessage,
    login: (name, email) =>
      setData((d) => ({
        ...d,
        user: { name: name.trim() || "Друг", email: email.trim() },
      })),
    logout: () => setData((d) => ({ ...d, user: null })),
    openAuth: (message) => {
      setAuthMessage(typeof message === "string" ? message : null);
      setAuthOpen(true);
    },
    closeAuth: () => {
      setAuthOpen(false);
      setAuthMessage(null);
    },
    addConsultation: (c) =>
      setData((d) => ({
        ...d,
        consultations: [
          { ...c, id: genId(), createdAt: new Date().toISOString() },
          ...d.consultations,
        ],
      })),
    addEvent: (e) =>
      setData((d) => ({
        ...d,
        events: [
          { ...e, id: genId(), createdAt: new Date().toISOString() },
          ...d.events,
        ],
      })),
    setSubscription: (s) => setData((d) => ({ ...d, subscription: s })),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
