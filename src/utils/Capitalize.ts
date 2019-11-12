export function capitalizeFirstLetter(str: string): string {
  return str.toLowerCase()
    .split("-")
    .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}
export function capitalizeFirstLetterAndJoin(str: string): string {
  return str.toLowerCase()
    .split("-")
    .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
    .join("-");
}