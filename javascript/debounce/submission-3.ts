export default function debounce(func: Function, wait: number): Function {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function(this: any, ...args: any[]) {
    clearTimeout(timeoutId ?? undefined);

    timeoutId = setTimeout(() => func.apply(this, args), wait);
  }
}