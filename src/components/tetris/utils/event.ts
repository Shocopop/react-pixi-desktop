export default class event<T> {
  toInvoke: ((arg: T) => void)[];
  constructor() {
    this.toInvoke = [];
  }
  subscribe(cb: (arg: T) => void): void {
    this.toInvoke.push(cb);
  }
}
