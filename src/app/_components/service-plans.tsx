"use client";


export function ServicePlans() {
  return (
    <section id="plans" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            成長フェーズに合わせた<span className="text-emerald-600"><br className="md:hidden" />3つのプラン</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          料金体系は月額制<br className="hidden md:block"  />最低 月40万円台から始められ、平均年1200万超のフルタイム CTO 採用よりも 初期コストと解雇リスクを抑えられます。
          </p>
        </div>
      </div>
    </section>
  );
}