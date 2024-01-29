import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto): void {
    this.messagesService.createOne(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    const message = this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message Not Found');
    }

    return message;
  }
}
