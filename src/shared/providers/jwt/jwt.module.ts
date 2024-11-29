// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtProvider } from '../jwt/Jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [
    { provide: 'InterfaceTokenProvider', useClass: JwtProvider },
  ],
  exports: [
    JwtModule,
    { provide: 'InterfaceTokenProvider', useClass: JwtProvider }
  ],
})
export class JwtModuleProvider {}
