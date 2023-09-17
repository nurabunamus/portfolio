import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/noor-abunamus/',
    },
    { icon: <FaGithub size={24} />, url: 'https://github.com/nurabunamus' },
    { icon: <FaEnvelope size={24} />, url: 'mailto:nurabunamus99@gmail.com' },
    {
      icon: <FaInstagram size={24} />,
      url: 'https://www.instagram.com/noorin_sa1/?igshid=MzMyNGUyNmU2YQ%3D%3D',
    },
  ];
  return (
    <div className="flex flex-row sm:flex sm:flex-col justify- items-center sm:space-y-5 sm:fixed sm:left-5 bottom-10">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-110"
          style={{ animationDelay: `${0.1 * (index + 1)}s` }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
