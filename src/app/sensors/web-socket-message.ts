export interface WebSocketMessage {
  data: number | string | object;
  type?: string;
  timestamp?: number;
  [keyof: string]: any;
}
