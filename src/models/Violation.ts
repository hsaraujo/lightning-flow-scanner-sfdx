export class Violation {
  public flowName: string;
  public ruleName: string;
  public description: string;
  public path: string;
  public details;

  constructor(flowName: string, ruleName: string, description: string, path: string, details?) {
    this.flowName = flowName;
    this.ruleName = ruleName;
    this.description = description;
    this.path = path;
    this.details = details;
  }
}
