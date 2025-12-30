// utils/truncateText.ts
export function truncateText(text: string, maxLength:number) {
  if (!text) return "";
  return text.length > maxLength
    ? text.slice(0, maxLength) + "…"
    : text;
}
