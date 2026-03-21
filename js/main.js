/* ============================================================
   ポートフォリオ main.js
   ============================================================

   このファイルはスクロールアニメーションのみを担当しています。
   デザインの変更はstyle.cssで行ってください。

   ============================================================ */


/* ============================================================
   ▼ スクロールアニメーション
   画面に入った要素に .visible クラスを付与してフェードインさせる
   （style.cssの .fade-in と .fade-in.visible で見た目を制御）
   ============================================================ */

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {

      // .fade-in クラスがついた要素に .visible を付与
      e.target.classList.add('visible');

      // 子要素（目次・作品カード・SNSカード）に順番に遅延をつける
      // ▼ 遅延時間を変えたい場合は 0.1 の数値を調整してください
      e.target.querySelectorAll('.toc-item, .work-card, .sns-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`;
      });

    }
  });
}, {
  threshold: 0.1 // 要素が10%見えたらアニメーション開始（0〜1で調整可能）
});

// .fade-in クラスのついた要素を全て監視対象にする
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));