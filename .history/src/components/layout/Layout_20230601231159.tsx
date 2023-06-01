import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
