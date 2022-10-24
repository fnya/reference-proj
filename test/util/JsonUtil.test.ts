import { describe, test, expect } from '@jest/globals';
import { InnerEntity } from '@src/entity/InnerEntity';
import { JsonUtil } from '@src/util/JsonUtil';
import { OuterEntity } from '@common-entity/entity/OuterEntity';

describe('JsonUtilのテスト', () => {
  test('stringifyで想定した結果が返ってくる', () => {
    // 準備
    const expected = '{"name":"hoge"}';
    const entity = new InnerEntity('hoge');

    // 実行
    const actual = JsonUtil.stringify(entity);

    // 検証
    expect(actual).toEqual(expected);
  });

  // 追加
  test('プロジェクト参照先のインスタンスをが想定した結果が返ってくる', () => {
    // 準備
    const expected = '{"age":1}';
    const entity = new OuterEntity(1);

    // 実行
    const actual = JsonUtil.stringify(entity);

    // 検証
    expect(actual).toEqual(expected);
  });
});
