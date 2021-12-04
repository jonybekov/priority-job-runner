import { JobRunner } from "./JobRunner";

const jobRunner = new JobRunner([]);

let loops = 10;

const runner = () => {
  console.log("Running");
};

while (loops > 0) {
  loops--;

  var createJob = function () {
    var job = jobRunner.createJob();

    job.setPriority(Math.round(Math.random() * 90) + 10);

    job.description = `job #${loops}, priority:${job.getPriority()}`;

    job.fn = runner;
    job.opts = { timeout: Math.round(Math.random() * 1000) };

    return job;
  };

  // this will fire a job added event
  jobRunner.enquee(createJob());
}

var list = jobRunner.getJobsList();
console.info("total jobs: ", list.length);

list.forEach(function (job) {
  console.info("job: ", job.id, " p: ", job.getPriority());
  console.info(job.fn());
});
