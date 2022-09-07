import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    //create pw hash with argon2
    const hash = await argon.hash(dto.password);
    try {
      //save new user in db
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      //delete user hash
      delete user.hash;

      //return user after saving
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken!');
        }
      }
    }
  }
  async signin(dto: AuthDto) {
    //find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    //throw exception if user doesn't exist
    if (!user) throw new ForbiddenException('Credential incorrect!');

    //validate pw
    const pwMatches = await argon.verify(user.hash, dto.password);

    //pw mismatch
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect!');

    //pw match => send back user
    delete user.hash;
    return user;
  }
}
