"use client";
import React, { useState } from "react";
import cotizaciones from "../cotizaciones.json";
import Form from "./components/form";
const COTIZACIONES = cotizaciones as Record<
  string,
  { compra: number; venta: number }
>;

export default function Home() {
  const [amount, setAmount] = useState(0);
  return (
    <main className="grid gap-8">
      <section className="flex-1">
        <Form
          value={amount}
          onChange={(_amount: number) => setAmount(_amount)}
        />
      </section>
      <section className="bg-emerald-800 flex-1 rounded-3xl p-8 text-white">
        <ul className="flex flex-col gap-4">
          {Object.entries(COTIZACIONES).map(
            ([name, value]: [string, { compra: number; venta: number }]) => {
              const total = amount ? Number(amount / value.venta) : value.venta;
              return (
                <li
                  key={name}
                  className="flex gap-4 justify-between items-center"
                >
                  <div className="text-2xl ">{name}</div>
                  <div className="flex items-center gap-4">
                    {amount ? (
                      <div className="text-lg items-center font-bold text-emerald-300 ">
                        {Number(total).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </div>
                    ) : null}
                    <div className="text-emerald-400 text-2xl font-bold ">
                      {Number(value.venta).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </main>
  );
}
