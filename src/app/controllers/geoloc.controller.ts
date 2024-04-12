import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { GeolocationService } from '../services/geoloc.service';

@Controller('/geoloc')
export class GeolocController {
  constructor(private geolocService: GeolocationService) {}

  @Get()
  async getGeolocalization(@Req() req: Request, @Res() res: Response) {
    const address = await this.geolocService.getAddressGeoloc(req);
    return res.json(address);
  }
}
