/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';
import TechnologiesSection from '@/components/TechnologiesSection';
import MainSection from '@/components/MainSection';
import About from '@/components/About';
import Contact from '@/components/ContactForm';
import { FontAwesomeIcon } from '@/node_modules/@fortawesome/react-fontawesome/index';

export default function Home() {
  return (
    <main className="w-11/12 mx-auto  my-5  ">
      <Navbar />

      <MainSection />

      <About />

      <TechnologiesSection />

      <br />
      <br />
      <br />
      <br />

      <section className=" py-12 " id="projects">
        <h2 className="text-4xl font-semibold text-center mb-8 dark:text-white">
          My Recent Work
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Here are a few past projects I've worked on. Want to see more?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          <ProjectCard
            imageSrc="/homeTaste.png"
            altText="HomeTaste Project"
            title="Home Taste (REST API)"
            description="HomeTaste is a platform that brings together busy individuals, such as students, with skilled local cooks who offer a diverse selection of delicious homemade dishes."
            skills={[
              'Typescript',
              'Nodejs',
              'MongoDB',
              'Expressjs',
              'Swagger',
              'JWT',
              'Passport',
              'Supertest',
              'Nodemailer',
              'Cloudinary',
            ]}
            websiteUrl="https://github.com/nurabunamus/HomeTaste"
          />

          <ProjectCard
            imageSrc="/matchetune.png"
            altText="Matchetune Project"
            title="Matchetune"
            description="Healing platform that considers different healing approaches providing alternatives for people to freely choose what makes sense for each one."
            skills={['Angular', 'Firebase', 'PrimeNG']}
            websiteUrl="https://matchetune.com/"
          />
          <ProjectCard
            imageSrc="/Molhem.png"
            altText="Molhem Project"
            title="Molhem"
            description="The project is a book swapping platform where users can freely browse and search for books, register, create profiles, and connect with others for swapping. It aims to simplify the exchange of books among readers, offering a seamless experience for both visitors and registered users."
            skills={['Reactjs', 'Firebase']}
            websiteUrl="https://molhem-63557.web.app/"
          />
          <ProjectCard
            imageSrc="/eventy.png"
            altText="Eventy Project"
            title="Eventy"
            description="Eventy is a website that allows organizations to publish their events and allows users to browse events and join them."
            skills={[
              'React',
              'Nodejs',
              'Expressjs',
              'Nodemailer',
              'PostgreSQL',
              'Figma',
              'Moment',
              'React Redux',
              'Material Design',
            ]}
            websiteUrl="https://github.com/nurabunamus/eventy"
          />
          <ProjectCard
            imageSrc="/care360.png"
            altText="Care360 Project"
            title="Care 360"
            description="Care 360 is a mobile application that allows clients to book appointments with different specialists easily."
            skills={[
              'React Native',
              'Expressjs',
              'Nodejs',
              'PostgreSQL',
              'cloudinary',
              'joi',
            ]}
            websiteUrl="https://github.com/nurabunamus/Care-360"
          />
          <ProjectCard
            imageSrc="/world.png"
            altText="Matchetune Project"
            title="Countries Application"
            description="Countries application enables you to discover different countries around the world. You can make an educational journey inside the application to discover countries, countries' information such as their languages, and many other different things in an easy and fast way."
            skills={['Angular', 'Firebase']}
            websiteUrl="https://countries-app-d8d53.web.app/countries"
          />
          <ProjectCard
            imageSrc="/monsters.png"
            altText="Monsters Project"
            title="Monsters Rolodex"
            description="React application built using an API for generating monsters."
            skills={['React']}
            websiteUrl="https://monstersrolodex.netlify.app/"
          />
          <ProjectCard
            imageSrc="/tec.png"
            altText="Tec Project"
            title="Tec Application (For Kids)"
            description="Tec App with a special character enable kids to have an enjoyable journey to learn English vocabulary with colorful pictures and right pronounciation for words. With an attractive design for boys and girls in different ages."
            websiteUrl="https://gsg-fc02.github.io/Tec-Application/"
            skills={['HTML5', 'CSS3', 'Javascript']}
          />
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Contact />
      <br />
      <br />
      <br />
      <footer>
        <p className="text-center text-gray-600 dark:text-gray-400">
          © 2023 All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
