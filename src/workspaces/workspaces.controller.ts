import { Body, Controller, Delete, Get, Param, Post, Request, Response } from '@nestjs/common';
import { WorkspacesRepository } from './repositories/workspaces-repository';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';

@Controller('workspaces')
export class WorkspacesController {
  constructor(private workspaces: WorkspacesRepository) {}

  @Get()
  async all(@Request() req: any) {
    const { id } = req.user;
    return await this.workspaces.all(id);
  }

  @Post('create')
  async create(@Body() data: CreateWorkspaceDto, @Request() req: any) {
    const { id } = req.user;
    const res = await this.workspaces.create(data, id);
    return {
      res,
    };
  }

  
  @Delete('delete/:ID')
  async delete( @Param() param: any){
    const { ID } = param;
    return await this.workspaces.delete(Number(ID));
  }
}
