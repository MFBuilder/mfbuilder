import { ChannelEntity } from '../../domain/entities/channel';
import { ProfileChannelEntity } from '../../domain/entities/profileChannel';
import { SystemContext } from '../../domain/interfaces/context';
import { IdGenerator } from '../../domain/interfaces/idGenerator';
import { ProfileChannelRepository } from '../../domain/interfaces/repositories/profileChannel';

export class ProfileChannelService {
  private profileChannelRepository: ProfileChannelRepository;
  private idGenerator: IdGenerator;

  constructor({
    profileChannelRepository,
    idGenerator,
  }: {
    profileChannelRepository: ProfileChannelRepository;
    idGenerator: IdGenerator;
  }) {
    this.profileChannelRepository = profileChannelRepository;
    this.idGenerator = idGenerator;
  }

  async get(ctx: SystemContext, id: ProfileChannelEntity['id']) {
    return await this.profileChannelRepository.get(ctx, id);
  }

  async getByChannel(
    ctx: SystemContext,
    channelId: ChannelEntity['id'],
    channelAccountId: ProfileChannelEntity['channelAccountId']
  ) {
    const profileChannel = await this.profileChannelRepository.findOne(ctx, {
      channelId: { $equals: channelId },
      channelAccountId: { $equals: channelAccountId },
    });

    if (profileChannel === null) {
      // TODO: Add custom NotFound error
      throw Error();
    }

    return profileChannel;
  }

  async create(
    ctx: SystemContext,
    profileChannel: Omit<ProfileChannelEntity, 'id'>
  ) {
    const profileChannelId = this.idGenerator.generate();
    await this.profileChannelRepository.create(ctx, {
      ...profileChannel,
      id: profileChannelId,
    });
    return profileChannelId;
  }

  async update(
    ctx: SystemContext,
    id: ProfileChannelEntity['id'],
    delta: Pick<ProfileChannelEntity, 'data' | 'status'>
  ) {
    await this.profileChannelRepository.update(ctx, id, delta);
  }

  async delete(ctx: SystemContext, id: ProfileChannelEntity['id']) {
    return this.profileChannelRepository.delete(ctx, id);
  }
}
