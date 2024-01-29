import { MessagesRepository } from './messages.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepo: MessagesRepository) {}

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
