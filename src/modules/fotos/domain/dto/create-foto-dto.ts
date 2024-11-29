export class CreateFotoDto{
  url: string
  path:string
  constructor( url: string,  path:string) {
    this.path = path,
    this.url = url
  }
}