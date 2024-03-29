import Head from "next/head";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import deved from "/public/dev-ed-wave.png";
import design from '/public/design.png';
import code from '/public/code.png';
import consulting from '/public/consulting.png';
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
         <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={deved} layout="fill" objectFit="cover"/>
         </div>
      </section>

      <section>
        <div>
           <h3 className="text-3xl py-1">Services I offer</h3> 
           <p className="text-md py-2 leading-8 text-gray-800">
            Since the beginning of my journey as a freelance designer and develepor, 
            I've immersed myself in a world where creativity meets technology, 
            constantly seeking new challenges and opportunities to expand my skills.
           </p>
           <p className="text-md py-2 leading-8 text-gray-800">
           Through countless projects and collaborations, I've honed my craft, 
           delving deep into the intricacies of design principles and the ever-evolving 
           landscape of programming languages. With each endeavor, I've not only refined 
           my technical expertise but also cultivated a keen eye for aesthetics and user experience.
           </p>
        </div>
        <div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div className="mx-auto mb-8 w-20 h-20">
              <Image src={design} width={100} height={100} />
           </div>
            <h3 className="text-lg font-medium pt-8 pb">Beatiful Designs</h3>
            <p className="py-2">
              This journey has been a testament to my passion 
              for innovation and my commitment to delivering solutions 
              that not only meet but exceed expectations.
            </p>
            <h4 className="py-4 text-teal-600">Desgin tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Ilustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div className="mx-auto mb-8 w-20 h-20">
              <Image src={code} width={100} height={100} />
           </div>
            <h3 className="text-lg font-medium pt-8 pb">Beatiful Designs</h3>
            <p className="py-2">
              This journey has been a testament to my passion 
              for innovation and my commitment to delivering solutions 
              that not only meet but exceed expectations.
            </p>
            <h4 className="py-4 text-teal-600">Desgin tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Ilustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <div className="mx-auto mb-8 w-20 h-20">
              <Image src={consulting} width={100} height={100} />
           </div>
            <h3 className="text-lg font-medium pt-8 pb">Beatiful Designs</h3>
            <p className="py-2">
              This journey has been a testament to my passion 
              for innovation and my commitment to delivering solutions 
              that not only meet but exceed expectations.
            </p>
            <h4 className="py-4 text-teal-600">Desgin tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Ilustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Since the beginning of my journey as a freelance designer and develepor, 
            I've immersed myself in a world where creativity meets technology, 
            constantly seeking new challenges and opportunities to expand my skills.
           </p>
           <p className="text-md py-2 leading-8 text-gray-800">
           Through countless projects and collaborations, I've honed my craft, 
           delving deep into the intricacies of design principles and the ever-evolving 
           landscape of programming languages. With each endeavor, I've not only refined 
           my technical expertise but also cultivated a keen eye for aesthetics and user experience.
           </p>
        </div>
      </section>
      </main>
    </div>
  );
}
