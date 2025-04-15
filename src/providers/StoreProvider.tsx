"use client";

import { AppStore, makeStore } from "@/lib/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { Persistor } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  const persistorRef = useRef<Persistor | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    persistorRef.current = persistStore(storeRef.current);
  }

  if (!storeRef.current || !persistorRef.current) {
    throw new Error("Failed to initialize store or persistor.");
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current as Persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
