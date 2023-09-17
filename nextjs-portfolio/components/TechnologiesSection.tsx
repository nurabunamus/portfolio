import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDatabase,
  FaGithubSquare,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiSwagger,
  SiJest,
} from 'react-icons/si';

const TechnologiesSection = () => {
  const technologies = [
    { name: 'Typescript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'MongoDB', icon: FaDatabase, color: 'text-green-700' },
    { name: 'PosgresSQL', icon: FaDatabase, color: 'text-blue-800' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-blue-400' },
    { name: 'Expressjs', icon: SiExpress, color: 'text-blue-400' },
    { name: 'Jest', icon: SiJest, color: 'text-red-400' },
    { name: 'Swagger', icon: SiSwagger, color: 'text-blue-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3, color: 'text-blue-500' },
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'GitHub', icon: FaGithubSquare, color: 'text-black-700' },
    { name: 'Git', icon: FaGit, color: 'text-red-500' },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-4xl font-semibold text-center mb-8">
          I have hands-on experience with a variety of technologies, including:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform hover:scale-105 transform-gpu hover:shadow-xl"
            >
              <tech.icon className={`text-4xl ${tech.color} mb-2`} />
              <p className="text-lg font-medium text-gray-800 dark:text-white">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
