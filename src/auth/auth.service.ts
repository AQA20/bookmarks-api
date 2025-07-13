import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '@src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { UserResponseDto } from './dto/user-response.dto';
import { plainToInstance } from 'class-transformer';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: AuthDto) {
    try {
      // Generate the password
      const hash = await argon.hash(dto.password);
      // Save the new user in database
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      // Return the saved user
      return plainToInstance(UserResponseDto, user, {
        excludeExtraneousValues: true,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email is taken');
        }
      }
      throw error;
    }
  }
  async signin(dto: AuthDto) {
    // Find user by email
    const user = await this.prisma.user.findFirst({
      where: { email: dto.email },
    });
    // Throw an exception if user doesn't exist
    if (!user) {
      throw new ForbiddenException('Invalid credentials');
    }
    // Compare password
    const isPasswordMatches = await argon.verify(user.hash, dto.password);
    // If password is incorrect throw an exception
    if (!isPasswordMatches) {
      throw new ForbiddenException('Invalid credentials');
    }
    // Send the user back
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get<string>('JWT_SECRET'),
    });
    return { access_token: token };
  }
}
