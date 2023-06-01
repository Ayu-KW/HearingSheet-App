export const Header = () => {
  return (
    <header className="bg-sky-600 p-4 text-white flex justify-around">
      <h1 className="text font-bold">ヒアリングシートアプリ</h1>
      <nav className="flex gap-6 items-center font-bold">
        <p>新規登録</p>
        <p>顧客一覧</p>
        <button className="bg-rose-400 rounded-md py-1 px-2 hover:bg-rose-300 duration-500">
          ログアウト
        </button>
      </nav>
    </header>
  );
};
