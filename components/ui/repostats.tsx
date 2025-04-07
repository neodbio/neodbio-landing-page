"use client";

import { useRepoStats } from "@/hooks/use-repostats";
import { Star, GitFork, Users } from "lucide-react";

export default function RepoStats() {
  const stats = useRepoStats("neondatabase", "neodb");

  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4" />
        <span>{stats?.stars?.toLocaleString() ?? "–"} stars</span>
      </div>
      <div className="flex items-center gap-1">
        <GitFork className="h-4 w-4" />
        <span>{stats?.forks?.toLocaleString() ?? "–"} forks</span>
      </div>
      <div className="flex items-center gap-1">
        <Users className="h-4 w-4" />
        <span>{stats?.contributors ?? "–"} contributors</span>
      </div>
    </div>
  );
}
