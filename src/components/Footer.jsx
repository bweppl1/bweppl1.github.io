import '../index.css';

const Footer = () => {
    return (
      <footer className="bg-black text-white text-end py-3 px-3 mt-auto">
        <p>&copy; {new Date().getFullYear()} Brent Weppler</p>
      </footer>
    );
  };
  
  export default Footer;
  