/**
 * 1つのJavaScripにまとめたいTypeScriptを定義する
 */
// 例
// import sum from './sum';
import { JsonUtil } from './util/JsonUtil';

// globalの型定義
declare const global: {
  [x: string]: unknown;
};

// 公開したい関数を定義
// global.sum = sum;
global.JsonUtil = JsonUtil;
