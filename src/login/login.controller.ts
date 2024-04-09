import { Body, Controller, Get, Post, Res, Session } from '@nestjs/common'
import * as svgCaptcha from 'svg-captcha'
import type { LoginService } from './login.service'

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('code')
  getVerifyCode(@Res() res, @Session() session) {
    const code = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1i',
      color: true,
      background: '#cc9966',
    })

    session.code = code.text
    res.type('image/svg+xml')
    res.send(code.data)
  }

  @Post()
  login(@Body() body, @Session() session) {
    const valid = body.code.toLowerCase() === session.code.toLowerCase()
    return {
      msg: valid ? '验证码正确' : '验证码错误',
      code: 200,
    }
  }
}
