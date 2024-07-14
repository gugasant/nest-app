import { Body, Controller, Get, Header, HttpCode, Param, Post, Redirect } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';


@Controller('cats')
export class CatsController {

  @Post()
  @Header('Cache-Control', 'none') // customiza o response header
  @HttpCode(204) // de 201 para 204 pode mudar o status code com o decorador httcode no handler
  async create(@Body() createCatDto: CreateCatDto) {
    return 'adiciona um novo gato'
  }

  @Get()
  findAll(): string {
    return 'retorna todos os gatos'
  }

  @Get(':id')
  findOne(@Param('id') id: any): string {
    return `isso retorna o gato número #${id}`
  }



  // @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }
  
}
