import {RisqueLevel} from "./risque-level";

export class AssessmentRiskResult {
  patientId: number | undefined;
  riskLevel: RisqueLevel | undefined;
  factorsMatch: string[] | undefined;
  patientAge: number | undefined;
}
