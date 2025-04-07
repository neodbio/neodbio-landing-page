// useRepoStats.ts
import { useEffect, useState } from "react";

export function useRepoStats(owner: string, repo: string) {
  const [stats, setStats] = useState<{
    stars: number;
    forks: number;
    contributors: number;
  } | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [repoRes, contribRes] = await Promise.all([
          fetch(`https://api.github.com/repos/${owner}/${repo}`),
          fetch(
            `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`
          ),
        ]);

        const repoData = await repoRes.json();
        const contribData = await contribRes.json();

        setStats({
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          contributors: Array.isArray(contribData) ? contribData.length : 0,
        });
      } catch (err) {
        console.error("Failed to fetch GitHub repo stats:", err);
      }
    }

    fetchStats();
  }, [owner, repo]);

  return stats;
}
