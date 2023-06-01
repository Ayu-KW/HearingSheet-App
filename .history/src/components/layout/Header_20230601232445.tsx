export const Header = () => {
  return (
    <header className="bg-sky-600 p-4 text-white flex justify-between">
      <h1 className="text-xl">ヒアリングシートアプリ</h1>
      <nav className="flex gap-4">
        <p>顧客一覧</p>
        <p>ログアウト</p>
      </nav>
    </header>
  );
};
