import { v4 } from 'uuid'

export class Foto{

  id = v4()
  path: string
  url : string

  constructor(path:string, url:string){
    this.path = path
    this.url = url
  }
  
}