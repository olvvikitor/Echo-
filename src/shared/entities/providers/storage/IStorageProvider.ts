export interface IStorageProvider{

  create():Promise<any>;
  getFile():Promise<any>
  delete():Promise<void>
}