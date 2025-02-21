import { IsNotEmpty, IsString, IsEnum, IsOptional } from "class-validator";
import { TaskStatus } from "../entities/task.entity";

export class CreateTaskDto {
  
  @IsString()
  @IsNotEmpty({ message: "o campo de texto é obrigatória" })
  text: string;

  @IsOptional()
  @IsEnum(TaskStatus, { message: 'Status deve ser PENDING, COMPLETED ou DONE' })
  status?: TaskStatus;

}
