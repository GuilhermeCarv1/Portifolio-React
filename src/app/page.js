import Head from "next/head";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Carvalho Portfolio</title>
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className="text-xl">developedbyed</h1>
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Guilherme Carvalho</h2>
            <h3 className="text-2xl py-2">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
            Freelancer providing services for programming.
            As a freelancer offering programming services, 
            I am dedicated to delivering tailored solutions 
            to meet my clients' needs
              </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
         
        </section>
      </main>
    </div>
  );
}
