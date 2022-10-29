import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const request = async (req: Request, res: Response, next: NextFunction) => {
  /* Fetch something const result: AxiosResponse = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  ); */

  return res.status(200).json({
    message: "Hello world!",
  });
};

export default {
  request
};
