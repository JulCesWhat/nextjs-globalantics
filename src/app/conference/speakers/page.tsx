import Link from "next/link";

import styles from "../conference.module.css";

interface ISpeaker {
  id: string;
  bio: string;
  name: string;
}

interface IData {
  speakers: ISpeaker[];
}

async function fetchSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
    {
      next: { revalidate: 20 },
    }
  );

  const data = await response.json();
  return data;
}

export default async function Page() {
  const data: IData = await fetchSpeakers();

  return (
    <div className={styles.parentContainer}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href={"/conference"}>Conference</Link>
        <span>Last rendered: {new Date().toLocaleTimeString()}</span>
      </div>
      <h1>Welcome speakers</h1>
      {data.speakers.map(({ id, name, bio }) => {
        return (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{name}</h3>
            <h5 className={styles.descText}>{bio}</h5>
          </div>
        );
      })}
    </div>
  );
}
