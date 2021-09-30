import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const linkData = [
    {
      title: "TPKH Family Games",
      isActive: "dibuka",
      links: [
        {
          text: "Formulir Pendaftaran",
          href: "https://forms.gle/q1RGEyZCAFKd1hQ46",
        },
      ],
    },
    {
      title: "TPKH Got Talent",
      isActive: "dibuka",
      links: [
        { text: "Formulir Pendaftaran", href: "https://docs.google.com/forms/d/e/1FAIpQLSfZufYmyCV3nP4-wzuns2qdomt7bn2g-Cvf07t6Q10IP5dh3Q/viewform" },
        { text: "Pengumpulan Bakat", href: "https://docs.google.com/forms/d/e/1FAIpQLScSPP5bVAVHd0MG6KSo-9_xReiomCtwkzkD2nzBM0VHOopogA/viewform" },
        { text: "SOP", href: "https://docs.google.com/document/d/1p3aKsPQIXsxQtkfZEBce6LU7Ta44TbglswUXstP-EDk/edit" },
        { text: "Term of Reference", href: "https://docs.google.com/document/d/1GCei3iAtUt4Y602Q8fQNnGTpZ0uqLo2fw8JthlHcuk4/edit?usp=sharing" },
      ],
    },
    {
      title: "Webinar TPKH",
      isActive: "belum",
      links: [
        { text: "Formulir Pendaftaran", href: "https://docs.google.com" },
      ],
    },
    {
      title: "TPKH Charity Concert",
      isActive: "belum",
      links: [
        { text: "Formulir Pendaftaran", href: "https://docs.google.com" },
      ],
    },
  ];
  return (
    <>
      <div id="gradient" className="fixed top-0 left-0 w-full"></div>
      <div className="items-center justify-center min-h-screen relative">
        <Head>
          <title>TPKH Festival</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="text-center z-50 text-gray-800 max-w-md mx-auto">
          <img src="/logo_final.png" alt="" className="max-w-xxs mx-auto" />
          <h1 className="text-gray-50 text-3xl font-bold gold-text-shadow-2">
            TPKH Festival 2021
          </h1>
          {/* <h2 className="mx-auto py-1 px-2 rounded-full bg-gray-800 border-b-4 border-r-4 border-yellow-500 text-gray-50 my-4">
            Pre-Event
          </h2> */}
          {linkData.map((data) => (
            <>
              <div className="flex flex-col space-y-2">
                <div className="tracking-wide flex mx-4 text-left py-1 px-1 rounded-3xl bg-gray-800 border-2 border-yellow-500 text-gray-50 mt-8">
                  <h2 className="flex-shrink ml-2">{data.title}</h2>
                  <div className="flex ml-auto">
                    {data.isActive === "dibuka" && (
                      <p className="text-center bg-green-600 px-2 rounded-2xl">
                        Dibuka
                      </p>
                    )}
                    {data.isActive === "belum" && (
                      <p className="text-center bg-yellow-600 px-2 rounded-2xl">
                        Belum Dibuka
                      </p>
                    )}
                    {data.isActive === "ditutup" && (
                      <p className="text-center bg-red-600 px-2 rounded-2xl">
                        Ditutup
                      </p>
                    )}
                  </div>
                </div>
                <ul className="mx-4 pl-8 list-inside flex flex-col space-y-2">
                  {data.links.map((link) => (
                    <li className="w-full">
                      {data.isActive === "dibuka" && (
                        <a
                          className="text-left block font-bold bg-gray-50 bg-opacity-40 hover:bg-opacity-60 hover:scale-105 duration-200 py-2 px-3 rounded-2xl"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="bx bx-right-arrow"></i> {link.text}
                        </a>
                      )}
                      {(data.isActive === "belum" ||
                        data.isActive === "ditutup") && (
                        <>
                          <div className="relative">
                            <p className="text-left block font-bold 0 py-2 px-3 rounded-2xl cursor-default bg-gray-500 bg-opacity-20">
                              <i class="bx bx-right-arrow"></i> {link.text}
                            </p>
                            <div
                              href="https://tpkhfestival.vercel.app"
                              className="absolute top-0 bottom-0 left-0 right-0"
                            ></div>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
          {/* <h3 className="text-2xl text-left">TPKH Family Games</h3> */}
        </main>
        <h2 className="text-center font-bold mt-8 mb-2 text-gray-800">
          Follow us on our social media
        </h2>
        <footer className="sticky bottom-0 text-center w-full z-50 text-gray-50">
          <div className="text-sm gold-text-shadow py-1 bg-gray-800 border-t-2 border-l-2 border-r-2 border-yellow-500 rounded-t-2xl max-w-md mx-auto flex m-0 items-center justify-center space-x-4">
            <a
              className="flex items-center justify-center font-bold hover:bg-gray-50 hover:bg-opacity-30 hover:scale-105 duration-200 py-1 px-3 rounded-2xl"
              href="https://instagram.com/tpkhfestival"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram-alt text-2xl"></i>
              &nbsp;&nbsp;TPKH Festival
            </a>
            <a
              className="flex items-center justify-center font-bold hover:bg-gray-50 hover:bg-opacity-30 hover:scale-105 duration-200 py-1 px-3 rounded-2xl"
              href="https://www.youtube.com/user/TPKHITS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-youtube text-2xl"></i>
              &nbsp;&nbsp;TPKH ITS
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
