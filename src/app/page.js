import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Guilherme Carvalho Portifolio</title>
      </Head>

      <main>
       <section className=" min-h-screen">
       <nav className="p-10 mb-12 flex justify-between">
        <h1>developedbyed</h1>
        <ul>
          <li>
          <BsFillMoonStarsFill/>
          </li>
          <li> <a href="#">Resume</a> </li>
        </ul>
       </nav>
       </section>
      </main>
    </div>

    
  );
}
