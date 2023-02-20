import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import sufiyaan from "../public/sufiyaan.JPG";
import c from "../public/c.png";
import mern from "../public/mern.png";
import python from "../public/python.png";
import cpp from "../public/cpp.png";
import linux from "../public/linux.png";
import proj1 from '../public/proj1.JPG';
import proj2 from '../public/proj2.JPG';
import proj3 from '../public/proj3.JPG';
import proj4 from '../public/proj4.JPG';
import proj5 from '../public/proj5.JPG';
import proj6 from '../public/proj6.JPG';
import proj7 from '../public/proj7.JPG';
import proj8 from '../public/proj8.JPG';
import proj9 from '../public/proj9.JPG';
import proj10 from '../public/proj10.JPG';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sufiyaan Usmani</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Sufiyaan Usmani</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)} /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Sufiyaan Usmani</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and Designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>I'm a Computer Science Enthusiast, working with many different technologies. I enjoy turning complex problems into useful, real-world applications</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://www.linkedin.com/in/sufiyaanusmani/" target={'_blank'}><AiFillLinkedin className='dark:text-white' /></a>
            <a href="https://github.com/sufiyaanusmani" target={'_blank'}><AiFillGithub className='dark:text-white' /></a>
            <a href="mailto:usmanisufiyaan@gmail.com"><AiFillMail className='dark:text-white' /></a>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden'>
            <Image src={sufiyaan} layout="fill" objectFile="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>My Skills</h3>

          </div>

          <div className='lg:flex gap-5'>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800'>
              <Image src={c} width={100} height={100} className="mx-auto" />
              <h3 className='text-lg font-medium pt-8 pb-2'>C</h3>
              <p className='py-2'>
                Built Management Systems like FAST Paisa (Banking System)
              </p>
              <h4 className='py-4 text-teal-600'>Tools I used</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Dev C++</p>
              <p className='text-gray-800 py-1 dark:text-white'>VS Code</p>
              <p className='text-gray-800 py-1 dark:text-white'>Git/GitHub</p>
            </div>

            <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800'>
              <Image src={cpp} width={100} height={100} className="mx-auto" />
              <h3 className='text-lg font-medium pt-8 pb-2'>C++</h3>
              <p className='py-2'>
                Data Structures and Algorithms, Revaluations (Property Prediction)
              </p>
              <h4 className='py-4 text-teal-600'>Tools I used</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Dev C++</p>
              <p className='text-gray-800 py-1 dark:text-white'>VS Code</p>
              <p className='text-gray-800 py-1 dark:text-white'>Git/GitHub</p>
            </div>

            <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800'>
              <Image src={mern} width={100} height={100} className="mx-auto" />
              <h3 className='text-lg font-medium pt-8 pb-2'>MERN</h3>
              <p className='py-2'>
                Backend Development and built many projects like personal blog website
              </p>
              <h4 className='py-4 text-teal-600'>Tools I used</h4>
              <p className='text-gray-800 py-1 dark:text-white'>VS Code</p>
              <p className='text-gray-800 py-1 dark:text-white'>NodeJs</p>
              <p className='text-gray-800 py-1 dark:text-white'>ExpressJS</p>
              <p className='text-gray-800 py-1 dark:text-white'>MongoDB</p>
              <p className='text-gray-800 py-1 dark:text-white'>ReactJS</p>
            </div>

            <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800'>
              <Image src={linux} width={180} height={180} className="mx-auto" />
              <h3 className='text-lg font-medium pt-8 pb-2'>Linux SysAdmin</h3>
              <p className='py-2'>
                System Administration, Networking, Storage
              </p>
              <h4 className='py-4 text-teal-600'>Tools I used</h4>
              <p className='text-gray-800 py-1 dark:text-white'>RedHat Enterprise Linux</p>
              <p className='text-gray-800 py-1 dark:text-white'>CentOS</p>
              <p className='text-gray-800 py-1 dark:text-white'>Ubuntu</p>
              <p className='text-gray-800 py-1 dark:text-white'>VMware</p>
              <p className='text-gray-800 py-1 dark:text-white'>Virtual Box</p>
            </div>

            <div className='text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800'>
              <Image src={python} width={100} height={100} className="mx-auto" />
              <h3 className='text-lg font-medium pt-8 pb-2'>Python</h3>
              <p className='py-2'>
                Built many automation based tools, data science, machine learning
              </p>
              <h4 className='py-4 text-teal-600'>Tools I used</h4>
              <p className='text-gray-800 py-1 dark:text-white'>VS Code</p>
              <p className='text-gray-800 py-1 dark:text-white'>PyCharm</p>
              <p className='text-gray-800 py-1 dark:text-white'>Jupyter Notebook</p>
              <p className='text-gray-800 py-1 dark:text-white'>Numpy</p>
              <p className='text-gray-800 py-1 dark:text-white'>Pandas</p>
              <p className='text-gray-800 py-1 dark:text-white'>SKLearn</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='text-center p-10 rounded-xl my-10 basis-1/3 flex-1'>
              <Image src={proj3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='text-center p-10 rounded-xl my-10 basis-1/3 flex-1'>
              <Image src={proj8} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='text-center p-10 rounded-xl my-10 basis-1/3 flex-1'>
              <Image src={proj1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='text-center p-10 rounded-xl my-10 basis-1/3 flex-1'>
              <Image src={proj2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='text-center p-10 rounded-xl my-10 basis-1/3 flex-1'>
              <Image src={proj4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='text-center p-10 rounded-xl my-10 basis-1/3 flex-1'>
              <Image src={proj5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='text-center p-10 rounded-xl my-10 basis-1/3 flex-1'>
              <Image src={proj6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='text-center p-10 rounded-xl my-10 basis-1/3 flex-1'>
              <Image src={proj7} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='text-center p-10 rounded-xl my-10 basis-1/3 flex-1'>
              <Image src={proj9} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='text-center p-10 rounded-xl my-10 basis-1/3 flex-1'>
              <Image src={proj10} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
