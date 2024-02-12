import "./navigation.scss";

type NavigationProps = {
  navigationLinks: {
    name: string;
    href: string;
  }[];
};

const Navigation = ({ navigationLinks }: NavigationProps) => {
  console.log("navigationLinks", navigationLinks);

  const links = navigationLinks.map(({ name, href }) => (
    <li key={name}>
      <a href={href}>{name}</a>
    </li>
  ));
  return <ul className="navigation-wrapper">{links}</ul>;
};

export default Navigation;
