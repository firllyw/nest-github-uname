import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getProfile(uname: string) {
    const url = `https://api.github.com/users/${uname}/repos`
    console.log(url)
    const repos = await this.httpService.axiosRef.get(url)
    return repos.data
  }
}
