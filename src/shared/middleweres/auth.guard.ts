import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InterfaceTokenProvider } from '../providers/interfaces/interface.token.provider';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject('InterfaceTokenProvider')
    private jwtService: InterfaceTokenProvider) { }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException()
    }
    try {
      const payload = await this.jwtService.verifyToken(token)
      request['user'] = payload

    } catch {
      throw new UnauthorizedException()
    }
    return true
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const token = request.headers.authorization
    return token
  }

}