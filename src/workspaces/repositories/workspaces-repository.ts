import { CreateWorkspaceDto } from "../dto/create-workspace.dto";
import { Workspace } from "../entities/workspace.entity";

export abstract class WorkspacesRepository {
    abstract create(data: CreateWorkspaceDto, userId: number): Promise<Workspace | undefined>
    abstract all(id: number): Promise<Workspace[] | undefined>
    abstract delete(ID: number) : Promise<boolean>
}