import { Job, JobParams } from "./Job";

export class JobRunner {
  jobs: Job[];

  constructor(jobs: any[]) {
    this.jobs = Array.isArray(jobs) ? jobs : [];
  }

  createJob(params?: JobParams) {
    const job = new Job(params);

    return job;
  }

  // add
  enquee(job: Job) {
    let contain = false;

    for (let i = 0; i < this.jobs.length; i++) {
      if (this.jobs[i].priority > job.priority) {
        // Once the correct location is found it is
        // enqueued
        this.jobs.splice(i, 0, job);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.jobs.push(job);
    }
  }

  isEmpty() {
    return this.jobs.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.jobs.shift();
  }

  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.jobs[0];
  }

  rear() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.jobs[this.jobs.length - 1];
  }

  getJobsList() {
    return [...this.jobs];
  }
}
