/**
 * reportWebVitals.js
 *
 * このファイルには、Web Vitals（ウェブのパフォーマンス指標）を測定するための関数が入っています。
 *
 * 具体的には、以下の指標をブラウザで取得できます：
 *
 * LCP（Largest Contentful Paint）：
 *    ページの主要コンテンツが表示されるまでの時間
 *
 * FID（First Input Delay）：
 *    ユーザーが最初に操作したときの遅延
 *
 * CLS（Cumulative Layout Shift）：
 *    レイアウトのずれの量
 */
const reportWebVitals = onPerfEntry => {

  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
