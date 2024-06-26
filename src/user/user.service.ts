import { Injectable } from '@nestjs/common'
import type { CreateUserDto } from './dto/create-user.dto'
import type { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return `This action adds a new user: ${JSON.stringify(createUserDto)}`
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user: ${JSON.stringify(updateUserDto)}`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
