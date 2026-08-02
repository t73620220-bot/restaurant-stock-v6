export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          飲食店専用
        </h1>

        <h2 className="text-2xl text-center text-gray-600 mb-10">
          仕入れ・在庫・原価管理 V6
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <button className="bg-blue-600 text-white rounded-xl p-8 text-xl hover:bg-blue-700">
            📄 納品書OCR
          </button>

          <button className="bg-green-600 text-white rounded-xl p-8 text-xl hover:bg-green-700">
            📦 商品マスター
          </button>

          <button className="bg-orange-500 text-white rounded-xl p-8 text-xl hover:bg-orange-600">
            📥 在庫管理
          </button>

          <button className="bg-red-500 text-white rounded-xl p-8 text-xl hover:bg-red-600">
            💰 原価管理
          </button>

          <button className="bg-purple-600 text-white rounded-xl p-8 text-xl hover:bg-purple-700">
            📊 CSV
          </button>

          <button className="bg-gray-700 text-white rounded-xl p-8 text-xl hover:bg-gray-800">
            ⚙️ 設定
          </button>

        </div>

        <div className="mt-10 text-center text-gray-500">
          Version 6.0.0
        </div>
      </div>
    </main>
  );
}