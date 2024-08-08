import { useEffect, useState } from "preact/hooks";
import { GithubContributions } from "../types/gh-event";
import { Badge } from "./ui/badge";
import { Icons } from "./ui/icons";

export const Github = () => (
  <div className="w-full h-full">
    <Widget />
  </div>
);

const username = "misaelvillaverde";

const Widget = () => {
  const [contributions, setContributions] = useState<
    {
      date: string;
      count: number;
      color: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = (await fetch(
          `https://contributions.potifar.dev?username=${username}`,
        ).then((res) => res.json())) as GithubContributions;

        const events = response.data;

        const contributionMap = new Map<
          string,
          {
            count: number;
            color: string;
          }
        >();

        // fill with all days of the last month
        const today = new Date();
        for (let i = 0; i < 30; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() - i);
          contributionMap.set(date.toISOString().split("T")[0], {
            count: 0,
            color: "",
          });
        }

        events.user.contributionsCollection.contributionCalendar.weeks.map(
          (week) =>
            week.contributionDays.map((day) => {
              if (contributionMap.has(day.date)) {
                contributionMap.set(day.date, {
                  count: day.contributionCount,
                  color: day.color,
                });
              }
            }),
        );

        const contributionArray = [];
        for (let [date, { color, count }] of contributionMap) {
          contributionArray.push({ date, color, count });
        }

        setContributions(contributionArray);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
      }
    };

    fetchContributions();
  }, []);

  // const average =
  //   contributions.reduce((acc, { count }) => acc + count, 0) /
  //   contributions.filter(({ count }) => count > 0).length;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative">
      <Badge
        icon={<Icons.github />}
        title="GitHub"
        className="absolute top-1 left-1"
      />
      <div className="grid grid-cols-6 grid-rows-5 gap-1 grid-flow-col mt-5">
        {contributions.reverse().map((contribution) => (
          <div
            key={contribution.date}
            className="w-[1.35rem] h-[1.35rem] rounded-sm dark:bg-neutral-800 bg-neutral-300"
            style={
              contribution.count > 0
                ? {
                    // backgroundColor: `oklch(52% 0.17 143 / ${contribution.count / average})`,
                    backgroundColor: contribution.color,
                  }
                : {}
            }
            title={`${contribution.date}: ${contribution.count} contributions`}
          />
        ))}
      </div>
    </div>
  );
};
