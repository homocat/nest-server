import { MessagesRepository } from './messages.repository';
import { NotFoundException } from '@nestjs/common';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    const message = this.messagesRepo.findOne(id);

    if (!message) {
      throw new NotFoundException();
    }

    return message;
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  createOne(message: string) {
    this.messagesRepo.createOne(message);
  }
}
