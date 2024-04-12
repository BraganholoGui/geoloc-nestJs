import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import axios from 'axios';

@Injectable()
export class GeolocationService {
  constructor() {}

  async getAddressGeoloc(req: Request) {
    const { latitude, longitude } = req.query;
    const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
      params: {
        lat: latitude,
        lon: longitude,
        format: 'json'
      }
    });
    return response.data;
  }
}
