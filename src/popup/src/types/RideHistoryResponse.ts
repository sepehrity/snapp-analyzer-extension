import { Coordinate } from './Rides';

interface RowDetail {
  description: string;
  title: string;
  type: string;
}

export interface RideHistoryResponse {
  // estimated_distance: number; /* deprecated ¯\_(ツ)_/¯ */
  // real_duration: number; /* deprecated ¯\_(ツ)_/¯ */
  created_at: string;
  destination: Coordinate;
  final_price: number;
  origin: Coordinate;
  rows: RowDetail[];
  title: string;
  updated_at: string;
  vehicle_model: string;
}