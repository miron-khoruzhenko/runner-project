export {};

declare global {
  interface Window {
    onTelegramAuth?: (user: any) => void;
  }
}