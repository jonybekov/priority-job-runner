import { v4 as uuidv4 } from "uuid";

export interface JobOpts {
  timeout?: number;
}

export interface JobParams {
  id?: string;
  description?: string;
  fn?: () => void;
  priority?: number;
  opts?: JobOpts;
}

export const noop = () => {};

export class Job {
  public id: string;
  public fn: () => void;
  private priority: number;
  public description: string;
  public opts: JobOpts;

  constructor(params?: JobParams) {
    const _params = params || {};

    this.id = _params.id || uuidv4();
    this.fn = _params.fn || noop;
    this.priority = _params.priority || 1;
    this.opts = _params.opts || {};
  }

  setPriority(priority: number) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }
}
