import {RisqueLevel} from "./risque-level";

export class AssessmentRiskResult {
  patientId: number | undefined;
  riskLevel: RisqueLevel | undefined;
  factorsMatch: string[] | undefined;

  constructor(obj?: Partial<AssessmentRiskResult>) {
    Object.assign(this, obj);
  }
}
