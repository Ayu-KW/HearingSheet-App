import { AboutThisApp } from "./AboutThisApp";

export default function Home() {
  return (
    <main className="lg:w-2/3 md:w-4/5 sm:w-11/12 m-auto font-mono py-36">
      {/* 本アプリについてのページ（表示確認） */}
      <AboutThisApp></AboutThisApp>
    </main>
  );
}
