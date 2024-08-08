export type GithubContributions = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          weeks: Array<{
            contributionDays: Array<{
              color: string;
              date: string;
              contributionCount: number;
            }>;
          }>;
        };
      };
    };
  };
};
