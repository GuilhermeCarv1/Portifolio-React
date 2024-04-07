import Head from "next/head";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMessage,
  AiFillGithub,
} from "react-icons/ai";

import deved from "/public/gui.png";

import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";
import star1 from "/public/stargray.png";
import star2 from "/public/starblack.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Carvalho Portfolio</title>
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="p-10 flex justify-between">
            <div className="group duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6 hover:translate-y-12">
              <div className="group-hover:duration-400 relative rounded-md w-32 h-16 bg-gradient-to-b from-teal-500 to-cyan-500 text-white flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-md before:absolute before:content[''] before:bg-cyan-200 before:right-1 before:top-0 before:w-32 before:h-12 before:-z-10">
                <span className="text-2xl font-bold">Jr</span>
                <p className="text-xs font-normal"> Full-Stack Developer </p>
              </div>
            </div>

            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8  "
                  href="#"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Guilherme Carvalho
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl font-medium">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Hello, my name is Guilherme, I'm 20 years old. I am a
              communicative and assertive individual, especially when it comes
              to the field of technology. I am always seeking to learn and
              expand my behavioral repertoire and skills to tackle challenges
              and deliver quality results.
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600">
            <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/GuilhermeCarv1">
                {" "}
                <AiFillGithub className="icone hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/guilherme-carvalho-980460281/">
                {" "}
                <AiFillLinkedin className="icone hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/guilhercarv/">
                <AiFillInstagram className="icone hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div className="relative mx-auto rounded-full w-56 h-56 mt-10  overflow-hidden md:w-72 md:h-72">
          <Image src={deved} alt="Imagem do desenvolvedor" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl pt-20 font-medium">Experience</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              I have experience in some widely used technologies in today's
              market, such as React, JavaScript, PHP. These experiences were
              acquired through the study plan I pursued at the{" "}
              <a
                href="https://www.masterd.pt/curso-web-development"
                class=" font-bold text-cyan-600"
              >
                MasterD institution
              </a>
              , which provided me with a better understanding of these
              technologies.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 py-5 lg:flex-row lg:flex-wrap">
            <div className="w-full lg:w-1/2 text-center shadow-lg p-14 rounded-xl my-5 dark:bg-white flex-1 hover:bg-teal-100 max-w-[300px] ">
              {" "}
              <i className="text-8xl devicon-react-original"></i>
              <div className="flex justify-center items-center ">
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star1}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
                <Image
                  src={star1}
                  className="mt-3 w-8  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center shadow-lg p-14 rounded-xl my-5 dark:bg-white flex-1 hover:bg-teal-100 max-w-[300px] ">
              {" "}
              <i class="text-8xl devicon-tailwindcss-original "></i>
              <div className="flex justify-center items-center ">
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star1}
                  className="mt-3 w-8  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center shadow-lg p-14 rounded-xl my-5 dark:bg-white flex-1 hover:bg-teal-100 max-w-[300px]">
              {" "}
              <i className="text-8xl devicon-nextjs-original-wordmark"></i>
              <div className="flex justify-center items-center ">
                <Image
                  src={star2}
                  className="mt-2 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-2 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-2 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star1}
                  className="mt-2 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
                <Image
                  src={star1}
                  className="mt-2 w-8  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center shadow-lg p-14 rounded-xl my-5 dark:bg-white flex-1 hover:bg-teal-100 max-w-[300px]">
              {" "}
              <i className="text-8xl devicon-javascript-plain"></i>
              <div className="flex justify-center items-center ">
                <Image
                  src={star2}
                  className="mt-5 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-5 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-5 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-5 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star1}
                  className="mt-5 w-8  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center shadow-lg p-14 rounded-xl my-5 dark:bg-white flex-1 hover:bg-teal-100 max-w-[300px]">
              {" "}
              <i className="text-8xl devicon-nodejs-plain-wordmark"></i>
              <div className="flex justify-center items-center ">
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  aalt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star1}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
                <Image
                  src={star1}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
                <Image
                  src={star1}
                  className="mt-3 w-8  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center shadow-lg p-14 rounded-xl my-5 dark:bg-white flex-1 hover:bg-teal-100 max-w-[300px]">
              {" "}
              <i className="text-8xl devicon-css3-plain"></i>
              <div className="flex justify-center items-center ">
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star1}
                  className="mt-3 w-8  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center shadow-lg p-14 rounded-xl my-5 dark:bg-white flex-1 hover:bg-teal-100 max-w-[300px]">
              {" "}
              <i className="text-8xl devicon-php-plain"></i>
              <div className="flex justify-center items-center ">
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star1}
                  className="mt-3 w-8  hover:scale-110 transition-transform"
                  alt="Estrela Preta"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center shadow-lg p-14 rounded-xl my-5 dark:bg-white flex-1 hover:bg-teal-100 max-w-[300px]">
              {" "}
              <i className="text-8xl devicon-bootstrap-plain"></i>
              <div className="flex justify-center items-center ">
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8 mr-2  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
                <Image
                  src={star2}
                  className="mt-3 w-8  hover:scale-110 transition-transform"
                  alt="Estrela Cinza"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 font-medium">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              develepor, I've immersed myself in a world where creativity meets
              technology, constantly seeking new challenges and opportunities to
              expand my skills.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Through countless projects and collaborations, I've honed my
              craft, delving deep into the intricacies of design principles and
              the ever-evolving landscape of programming languages. With each
              endeavor, I've not only refined my technical expertise but also
              cultivated a keen eye for aesthetics and user experience.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/2 flex-1 group relative">
              <a
                href="https://steady-crisp-e8b66a.netlify.app/"
                className="block relative"
              >
                <Image
                  src={web1}
                  className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="Imagem do Site 1"
                />
                <div className="text-4xl absolute top-6 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="https://github.com/GuilhermeCarv1/FoodRecips/tree/main/src">
                    <AiFillGithub className="" />
                  </a>
                </div>
              </a>
            </div>

            <div className="basis-1/3 flex-1 group relative">
              <a
                href="https://earnest-genie-b1348b.netlify.app/"
                className="block relative"
              >
                <Image
                  src={web2}
                  className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="Imagem do Site 2"
                />
                <div className="text-4xl absolute top-0 right-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="https://github.com/GuilhermeCarv1/atividade-2-bootrasp/blob/main/index.html">
                    <AiFillGithub className="" />
                  </a>
                </div>
              </a>
            </div>

            <div className="basis-1/3 flex-1 group relative">
              <a
                href="https://super-souffle-f137f1.netlify.app/"
                className="block relative"
              >
                <Image
                  src={web3}
                  className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="Imagem do Site 3"
                />
                <div className="text-4xl absolute top-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="https://github.com/GuilhermeCarv1/Weather/blob/main/index.html">
                    <AiFillGithub className="" />
                  </a>
                </div>
              </a>
            </div>

            <div className="basis-1/2 flex-1 group relative">
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7174475766024323072/"
                className="block relative"
              >
                <Image
                  src={web4}
                  className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="Imagem do Site 4"
                />
                <div className="text-4xl absolute top-4 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="https://github.com/GuilhermeCarv1/FormPHP/tree/main/formulario">
                    <AiFillGithub className="" />
                  </a>
                </div>
              </a>
            </div>

            <div className="basis-1/3 flex-1 group relative">
              <a
                href="https://todolistbox.netlify.app/"
                className="block relative"
              >
                <Image
                  src={web5}
                  className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="Imagem do Site 5"
                />
                <div className="text-4xl absolute top-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="https://github.com/GuilhermeCarv1/To-do-List-React/tree/main/src">
                    <AiFillGithub className="" />
                  </a>
                </div>
              </a>
            </div>

            <div className="mb-20 basis-1/2 flex-1 group relative">
              <a href="https://algallery.netlify.app/" className="block relative">
                <Image
                  src={web6}
                  className="rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt="Imagem do Site62"
                />
                <div className="text-4xl absolute top-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="https://github.com/GuilhermeCarv1/App-Image-React/tree/main/src">
                    <AiFillGithub className="" />
                  </a>
                </div>
              </a>
            </div>
          </div>
        </section>
        <footer className=" py-5">
          <div className="flex flex-col justify-center items-center gap-8">
            <p className=" pt-40 text-gray-600">Get in Touch</p>
            <h1 className="text-6xl font-medium">Contact Me</h1>
            <div className="flex justify-between shadow-xl p-4  rounded-xl my-5 dark:bg-white flex-1">
              <a
                className="flex hover:text-teal-600 transition-colors "
                href="mailto:guicarvalhooliveira2468@gmail.com"
              >
                <AiFillMessage className="text-4xl text-gray-600" />
                <p className="mt-1 ml-2 mr-6">
                  guicarvalhooliveira2468@gmail.com
                </p>
              </a>
              <a
                className="flex hover:text-teal-600 transition-colors "
                href="https://www.linkedin.com/in/guilherme-carvalho-980460281/"
              >
                <AiFillLinkedin className="text-4xl text-gray-600" />
                <p className="mt-1 ml-2">Linkedin</p>
              </a>
            </div>
          </div>
          <div className="text-center pt-4"></div>
        </footer>
        <div className="flex items-center justify-center h-full">
          <div className="pt-40  text-gray-600">
            <p>
              Copyright &#169; 2024 Guilherme Carvalho. All Rights Reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
