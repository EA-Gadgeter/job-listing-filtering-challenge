import { Header } from "./components/Header";
import { JobCard } from "./components/JobCard/JobCard";
import { useJobFilters } from "./hooks/useJobFilters";
import mockData from "./mock/data.json";
import type { Job } from "./types/job";
import styles from "./App.module.css";

const jobsData: Job[] = mockData;

function App() {
  const { filteredJobs, addFilter } = useJobFilters(jobsData);

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <ul className={styles.jobList}>
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onAddFilter={addFilter} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
