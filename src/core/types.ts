export type StageState = 'PENDING' | 'ACTIVE' | 'VERIFIED' | 'ERROR' | 'CONFLICT';
export type Confidence = 'LOW' | 'MEDIUM' | 'HIGH';

export interface NodeData {
  id: string;
  name: string;
  coords: string;
  zone: 'A_Entry' | 'B_Client';
  purpose: string;
  invariant: string;
  levers: string[];
  state: StageState;
  confidence: Confidence;
}
