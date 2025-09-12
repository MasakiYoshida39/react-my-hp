/**
 * App.test.js
 *
 * このファイルは、App.js のテスト用に自動生成されるサンプルファイルです。
 *
 * 役割：
 * - App コンポーネントの基本的な動作をチェックする単体テストを行います
 * - Jest と React Testing Library を使用します
 *
 * 内容の例：
 * - render(<App />)：App コンポーネントを仮想 DOM に描画
 * - screen.getByText(/learn react/i)：指定した文字列が画面にあるか確認
 * - expect(...).toBeInTheDocument()：DOM に存在することを検証
 *
 * 必要かどうか：
 * - 通常のホームページや SPA を作るだけなら不要
 * - テストを書く場合のみ残して活用します
 */
import Profile from './Profile';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
