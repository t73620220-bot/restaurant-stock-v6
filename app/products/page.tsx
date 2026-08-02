export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        📦 商品マスター
      </h1>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-8">
        ＋ 商品登録
      </button>

      <table className="w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">商品名</th>
            <th>規格</th>
            <th>単位</th>
            <th>最新価格</th>
            <th>業者</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-3">キャベツ</td>
            <td>1玉</td>
            <td>玉</td>
            <td>250円</td>
            <td>三重促成</td>
            <td>編集　削除</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}