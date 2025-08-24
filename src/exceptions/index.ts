export class NaverMapError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Vue3NaverMapError";
  }
}
