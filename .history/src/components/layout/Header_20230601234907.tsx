export const Header = () => {
  return (
    <header className="bg-sky-600 p-4 text-white flex justify-around">
      <h1 className="text-xl font-bold">ヒアリングシートアプリ</h1>
      <nav className="flex gap-4">
        <p>新規登録</p>
        <p>顧客一覧</p>
        <button className="bg-Rose-300 rounded-md">ログアウト</button>
      </nav>
    </header>
  );
};
