/**
 * content-visibility: auto によるレイアウトシフトに対応した smooth scroll。
 *
 * ## 背景
 * content-visibility: auto が付いたセクションは、画面外では
 * contain-intrinsic-size（500px）で仮の高さが確保されている。
 * scrollIntoView() はその瞬間のレイアウトで目標位置を計算するが、
 * スクロール中に途中のセクションが画面内に入ると実際の高さに展開され、
 * ターゲットの位置がズレてしまう。
 *
 * ## 解決策
 * scrollIntoView() ではなく、requestAnimationFrame ループで
 * ターゲット要素の現在位置を毎フレーム追従してスクロールする。
 * content-visibility の展開や画像読み込みでレイアウトが変わっても、
 * 常に最新の位置に向かって補正し続ける。
 */

const DURATION_MS = 600;

/**
 * ease-out-cubic: 最初は速く、終わりに向けて減速するイージング。
 * smooth scroll の自然な挙動に近い。
 */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * 指定した要素までスムーズにスクロールする。
 * 毎フレーム要素の最新位置を再取得するため、
 * スクロール中のレイアウトシフトに追従できる。
 */
export function smoothScrollTo(element: HTMLElement): void {
  const startY = window.scrollY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime; // 進んだ時間
    const progress = Math.min(elapsed / DURATION_MS, 1); // 進捗率
    const easedProgress = easeOutCubic(progress); // イージングされた進捗率

    // ── 毎フレーム、要素の「今の」絶対位置を取得し直す ──
    // content-visibility の展開で位置が変わっても、常に最新値を使う
    const targetY = element.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
