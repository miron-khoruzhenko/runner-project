interface Ethereum {
  disconnect: any;
  request: (args: { method: string }) => Promise<string[]>;
}

interface Window {
  ethereum?: Ethereum;
}
