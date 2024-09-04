import PawPrintIcon from "../assets/pawPringIcon";
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

const Footer = () => (
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <div className="flex items-center gap-2">
      <PawPrintIcon className="h-6 w-6" />
      <span className="text-sm font-medium">Paw Care</span>
    </div>
    <p className="text-xs text-muted-foreground ml-auto">
      &copy; 2024 Paw Care. All rights reserved.
    </p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <Link href="#" className="text-xs hover:underline underline-offset-4">
        Contact
      </Link>
      <Link href="#" className="text-xs hover:underline underline-offset-4">
        Privacy
      </Link>
      <Link href="#" className="text-xs hover:underline underline-offset-4">
        Terms
      </Link>
    </nav>
  </footer>
);

export default Footer;
