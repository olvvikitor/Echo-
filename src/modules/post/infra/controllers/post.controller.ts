import { Body, Controller, Get, Header, HttpStatus, Inject, Injectable, Param, ParseFilePipeBuilder, Post, Put, Req, UnauthorizedException, UploadedFile, UploadedFiles, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';

import { AuthGuard } from 'src/shared/middleweres/auth.guard';
import { CreatePostDto } from '../../domain/entities/create-post-dto';
import { PostService } from '../../services/post.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { SaveFotoPost } from 'src/modules/fotos/service/save.refs.post';
import { Foto } from 'src/modules/fotos/domain/entities/foto';
import { v4 } from 'uuid';
import { CreateFotoDto } from 'src/modules/fotos/domain/dto/create-foto-dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
@Controller('posts')
@UseGuards(AuthGuard)
export class PostController {
  constructor(
    @Inject()
    private postService: PostService,
    @Inject()
    private fotoService :SaveFotoPost,
    private configService:ConfigService
  ) { }

  @Post('/new')
  @UseInterceptors(FilesInterceptor('image'))
  async createPost(@Req() request: any , @Body() createPostDto: CreatePostDto, @UploadedFiles(new ParseFilePipeBuilder().addFileTypeValidator({
    fileType: 'png',
  }).build({ errorHttpStatusCode: HttpStatus.UNSUPPORTED_MEDIA_TYPE, fileIsRequired: false })) files: Express.MulterS3.File[] ) {

    if (!request.user) {
      throw new UnauthorizedException('Token inválido ou expirado')
    }

    const id = request.user.payload.id

    createPostDto.id_author = id

    console.log(createPostDto)

    if(this.configService.get('enviroment')==='prod'){
      const fotosRequest = await Promise.all(files.map((file)=>{
        const fotos:CreateFotoDto={
          path: file.key,
          url: file.location
        }
        return fotos
      }))
     return await this.postService.createPost(createPostDto, fotosRequest)

    }
    //caso esteja usando o ambiente de desenvolvimento
      const fotosRequest = await Promise.all(files.map((file)=>{
        const fotos:CreateFotoDto={
          path: file.path,
          url: file.filename
        }
        return fotos
      }))
     return await this.postService.createPost(createPostDto, fotosRequest)


  }

  @Get('/all')
  async showAll(@Req() request: any) {

    if (!request.user) {
      throw new UnauthorizedException('Token inválido ou expirado')
    }

    return await this.postService.findAll();

  }


}

