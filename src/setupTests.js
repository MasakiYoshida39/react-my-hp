/**
 * setupTests.js
 *
 * このファイルは、Jest テスト環境を初期化するための設定ファイルです。
 *
 * 具体的には：
 * - DOM のテスト用マッチャーを追加することができます
 *   例： expect(element).toHaveTextContent(/react/i)
 *
 * 役割：
 * - npm test を実行したときに自動で読み込まれ、テスト環境を整えます
 *
 * 必要かどうか：
 * - 通常のホームページや SPA を作るだけなら不要
 * - テストを書く場合のみ活用します
 */

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
