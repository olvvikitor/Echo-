export interface InterfaceTokenProvider{
  generateToken(payload: object):Promise<string>
  verifyToken(token:string): Promise<any>
}