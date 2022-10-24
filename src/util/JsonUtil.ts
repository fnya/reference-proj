/**
 * JSONのユーティリティ
 */
export class JsonUtil {
  /**
   * JSON.stringifyした結果を返す
   *
   * @param object オブジェクト
   * @returns JSON.stringifyした結果を返す
   */
  public static stringify(object: any): string {
    return JSON.stringify(object);
  }
}
