import { User } from '../User'
import { OmitType } from '@nestjs/mapped-types'

export class CreateUserDto extends OmitType(User, ['id']){}
