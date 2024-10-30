import FooterImage from "./FooterImage";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center bg-zinc-50 text-surface dark:bg-neutral-700 dark:text-white">
      <div className="container p-6">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <FooterImage imageUrl="https://i.pinimg.com/564x/ef/0a/b9/ef0ab93d14f9e2224672e47117a9e82d.jpg" />
          <FooterImage imageUrl="https://i.pinimg.com/564x/5e/76/15/5e76154b5aa46da65e6b4c230fb4cf31.jpg" />
          <FooterImage imageUrl="https://i.pinimg.com/564x/5e/f1/e7/5ef1e7f080aea94eb3f3851c84fa11cd.jpg" />
          <FooterImage imageUrl="https://i.pinimg.com/564x/c7/d1/d8/c7d1d8230479d7738e1296a100693976.jpg" />
          <FooterImage imageUrl="https://i.pinimg.com/564x/8e/bc/1f/8ebc1f65264977d0112e1f97f66a61ed.jpg" />
          <FooterImage imageUrl="https://i.pinimg.com/564x/40/a2/aa/40a2aad0f14587d73b9c610ef9cc52ff.jpg" />
        </div>
      </div>

      <div className="w-full p-4 text-center bg-bgcolor text-primary">
        © 2023 Copyright
      </div>
    </footer>
  );
};

export default Footer;
