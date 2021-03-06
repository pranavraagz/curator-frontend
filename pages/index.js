import React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import "@material-tailwind/react/tailwind.css"
import Head from "next/dist/shared/lib/head"

export default function Home() {
  // useEffect(() => {
  //   const apiEndpoint = '';
  //   const res =  fetch(apiEndpoint);
  //   const data =  res.json();

  //   setCurations(data);

  // }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-screen h-screen fcc bg-bg">
        <div className="w-1/2 p-10 space-y-4 text-xl border-2 border-gray-300 rounded-lg bg-block fcc text-primary">
          <Link href="/dashboard/">Dashboard</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </>
  )
}
