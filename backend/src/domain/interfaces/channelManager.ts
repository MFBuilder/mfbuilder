import { ChannelEntity } from '../entities/channel.js';
import { AnyRecord, UUID } from './utils.js';

export type ChannelAccount = {
  channelId: UUID;
  channelKind: string;
  channelAccountId: string;
  data: AnyRecord;
};

export type TextMessage = {
  kind: 'text';
  text: string;
};

export type InputTextMessage = TextMessage;
export type OutputTextMessage = TextMessage;

export type InputMessage = InputTextMessage;
export type OutputMessage = OutputTextMessage;

export type ChannelStartEvent = {
  kind: 'start';
  channelAccount: ChannelAccount;
  context?: string;
};

export type ChannelMessageEvent = {
  kind: 'message';
  channelAccount: ChannelAccount;
  message: InputMessage;
};

export type ChannelEvent = ChannelStartEvent | ChannelMessageEvent;

export type ChannelManager = {
  add(channel: ChannelEntity): Promise<UUID>;
  update(channel: ChannelEntity): Promise<UUID>;
  get(channelId: ChannelEntity['id']): ChannelEntity;
  handle(channelId: UUID, msg: unknown): Promise<ChannelEvent | null>;
  send(
    channelAccount: Pick<ChannelAccount, 'channelId' | 'channelAccountId'>,
    messages: OutputMessage[]
  ): Promise<void>;
};
