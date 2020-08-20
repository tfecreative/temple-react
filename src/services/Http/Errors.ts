/**
 * Custom HTTP Error class
 * @see {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#example}
 */
export class HttpError extends Error {
  constructor(message?: string) {
    super(message ?? "Sorry, we're not sure what went wrong (ʃ_⌣̀ )/||");
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
