import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import deved from "/public/dev-ed-wave.png";
import code from "/public/code.png";
import design from "/public/design.png";
import consulting from "/public/consulting.png";
import Image from "next/image";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Carvalho Portfolio</title>
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <div className="group duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6 hover:translate-y-12">
              <div className="group-hover:duration-400 relative rounded-2xl w-48 h-24 bg-gradient-to-b from-teal-500 to-cyan-500 text-white flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] before:bg-cyan-200 before:right-3 before:top-0 before:w-48 before:h-20 before:-z-10">
                <span className="text-4xl font-bold">Jr</span>
                <p className="text-md font-thin">- Frontend Developer -</p>
              </div>
            </div>

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Guilherme Carvalho
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Freelancer providing services for programming. As a freelancer
              offering programming services, I am dedicated to delivering
              tailored solutions to meet my clients' needs
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              "I have experience in various technologies widely used in today's
              market, such as React, Next.js, JavaScript, Node.js, CSS, PHP, and
              Bootstrap. These experiences have been crucial in developing my
              deep interest in the field of technology, motivating me not only
              to change careers but also to leverage other skills already
              present in my personality, which are valued in the market, such as
              interpersonal skills, effective communication, emotional
              intelligence, and adaptability."
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <i class="text-6xl devicon-react-original"></i>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <i class="text-6xl devicon-nextjs-original-wordmark"></i>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <i class="text-6xl devicon-javascript-plain"></i>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <i class="text-6xl devicon-nodejs-plain-wordmark"></i>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <i class="text-6xl devicon-css3-plain"></i>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <i class="text-6xl devicon-php-plain"></i>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <i class="text-6xl devicon-bootstrap-plain"></i>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
            </div>
          
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
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
            <div className="basis-1/2 flex-1 ">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/2 flex-1 ">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/2 flex-1 ">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
