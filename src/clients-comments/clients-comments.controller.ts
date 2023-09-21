import { Body, Controller, Post } from '@nestjs/common';
import { ClientsCommentsService } from './clients-comments.service';
import { ClientsComments } from './entities/clients-comments.entity';
import { CreateClientsCommentsDto } from './dto/create-clients-comments.dto';

@Controller('clients-comments')
export class ClientsCommentsController {
    constructor(private readonly clientsCommentsService: ClientsCommentsService) {}

    @Post('create')
    async create(@Body() data: CreateClientsCommentsDto): Promise<ClientsComments>{
        return await this.clientsCommentsService.create(data);
    }
}
