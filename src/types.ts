export interface MessageStreamMapType {
  [id: string]: string[];
}

export interface channelType {
  [id: string]: string;
}

export interface userType {
  [id: string]: string;
}

export type handlemainContentType = ({ channelName, userName }: { channelName: string; userName: string }) => void;

export type SetIdContextType = (id: number) => void | null;
