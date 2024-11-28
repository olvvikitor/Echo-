import { File } from 'buffer';
import { NextFunction, Request } from 'express';
import * as mime from 'mime-types';

import { extname } from 'path';

export const editFileName = (req:any, file:Express.Multer.File, callback:any) =>{
  console.log(req.user)
  const name = file.originalname.split('.')[0];
  const nomeExtraido = extname(file.originalname)
  const randomName = Array(5)
  .fill(null)
  .map(()=>Math.round(Math.random()*16).toString(16))
  .join('');
  callback(null, `${name}-${randomName}${nomeExtraido}`)
}
export const getType = (req:Request, file:Express.Multer.File, callback:any)=>{
  const type = mime.lookup(file.originalname)
  callback(null, type)
}