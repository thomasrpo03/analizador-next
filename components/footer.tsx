interface FooterProps {
  author: string;
}

const Footer: React.FC<FooterProps> = ({ author }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="flex w-full py-4 px-9 justify-end border-t-2">
      Desarrollado por {author} - {currentYear}
    </footer>
  );
};
export default Footer;
