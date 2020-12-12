export class ModelHelper {
  public static evalText(value: string): string {
    if (value == null || value.length === 0) {
      return null;
    }
    value = value.trim();
    return (value.length === 0) ? null : value;
  }
}
