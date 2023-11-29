import { Link } from "react-router-dom";
function Footer() {
  const fLinks = [
    { name: "Contact", to: "/" },
    { name: "Legal", to: "/" },
    { name: "Careers", to: "/" },
  ];

  const footerLinks = fLinks.map((link) => (
    <li
      className="transition-all duration-300 hover:text-white"
      key={link.name}
    >
      <Link to={link.to}>{link.name}</Link>
    </li>
  ));

  return (
    <footer className="flex items-center justify-between bg-yellow px-8 py-2">
      <div className="w-[90px]">
        <img src="/logos/full-logo.png" alt="" />
      </div>
      <nav>
        <ul className="flex gap-8">{footerLinks}</ul>
      </nav>
      <p className="text-xs">&copy; All rights reserved</p>
    </footer>
  );
}

export default Footer;
Footer;
