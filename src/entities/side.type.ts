import { Coin } from './coin.enum';
import { Jokenpo } from './jokenpo.enum';
import { Response } from './response.enum';

export type SideKey =
  | keyof typeof Coin
  | keyof typeof Jokenpo
  | keyof typeof Response;
