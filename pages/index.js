import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const linkData = [
    {
      title: "TPKH Family Games",
      links: [
        { text: "Formulir Pendaftaran", href: "https://docs.google.com" },
        { text: "SOP", href: "https://docs.google.com" },
        { text: "Term of Reference", href: "https://docs.google.com" },
      ],
    },
    {
      title: "TPKH Family Games",
      links: [
        { text: "Formulir Pendaftaran", href: "https://docs.google.com" },
        { text: "SOP", href: "https://docs.google.com" },
        { text: "Term of Reference", href: "https://docs.google.com" },
      ],
    },
    {
      title: "TPKH Family Games",
      links: [
        { text: "Formulir Pendaftaran", href: "https://docs.google.com" },
        { text: "SOP", href: "https://docs.google.com" },
        { text: "Term of Reference", href: "https://docs.google.com" },
      ],
    },
  ];
  return (
    <>
      <div className="items-center justify-center min-h-screen relative">
        <Head>
          <title>TPKH Festival</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="text-center z-50 text-gray-800 max-w-md mx-auto">
          <img src="/Logo Final.png" alt="" className="max-w-xxs mx-auto" />
          <h1 className="text-3xl font-bold">TPKH Festival 2021</h1>
          {/* <h2 className="mx-auto py-1 px-2 rounded-full bg-gray-800 border-b-4 border-r-4 border-yellow-500 text-gray-50 my-4">
            Pre-Event
          </h2> */}
          {linkData.map((data) => (
            <>
              <div className="flex flex-col space-y-2">
                <h2 className="mx-8 text-left py-1 px-2 rounded-3xl bg-gray-800 border-4 border-yellow-500 text-gray-50 mt-8">
                  {data.title}
                </h2>
                <ul className="mx-8 list-inside flex flex-col">
                  {data.links.map((link) => (
                    <li className="w-full">
                      <a
                        className="text-left block font-bold  hover:bg-gray-50 hover:bg-opacity-30 hover:scale-105 duration-200 py-2 px-3 rounded-2xl"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="bx bx-right-arrow"></i>&nbsp;&nbsp;&nbsp;
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
          {/* <h3 className="text-2xl text-left">TPKH Family Games</h3> */}
        </main>
        <footer className="flex items-center justify-center w-full py-2 z-50 space-x-4 text-gray-800">
          <a
            className="flex items-center justify-center font-bold  hover:bg-gray-50 hover:bg-opacity-30 hover:scale-105 duration-200 py-1 px-3 rounded-2xl"
            href="https://instagram.com/tpkhfestival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram-alt text-4xl"></i>
            TPKH Festival
          </a>
          <a
            className="flex items-center justify-center font-bold hover:bg-gray-50 hover:bg-opacity-30 hover:scale-105 duration-200 py-1 px-3 rounded-2xl"
            href="https://www.youtube.com/user/TPKHITS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-youtube text-4xl"></i>
            TPKH ITS
          </a>
        </footer>
      </div>
    </>
  );
}
