import { FaLinkedin, FaGithub, FaResearchgate } from 'react-icons/fa';
import { SiOrcid } from 'react-icons/si';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Bc. Tomáš Zbíral</h1>
      <nav className="flex space-x-4">
        <Link href="https://www.linkedin.com/in/tomáš-zbíral-56ba97316/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="#0077B5"/>
        </Link>
        <Link href="https://orcid.org/0000-0002-6977-7796" target="_blank" rel="noopener noreferrer">
          <SiOrcid size={24} color="#A6CE39"/>
        </Link>
        <Link href="https://github.com/ZbiralTomas" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="#FFFFFF"/>
        </Link>
        <Link href="https://www.researchgate.net/profile/Tomas-Zbiral" target="_blank" rel="noopener noreferrer">
          <FaResearchgate size={24} color="#00CCBB"/>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
