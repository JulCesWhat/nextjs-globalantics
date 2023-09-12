import Link from "next/link";

import styles from "../conference.module.css";


interface ISpeaker {
  id: string;
  name: string;
}

interface ISession {
  id: string
  title: string
  description: string
  room: string
  day: string
  track: string
  speakers: ISpeaker[]
}
interface IData {
  sessions: ISession[]
}

async function fetchSessions() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
    {
      cache: 'no-store'
    }
  );

  const data = await response.json();
  return data;
}

export default async function Page() {
  const data: IData = await fetchSessions();

  return (
    <div className={styles.parentContainer}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href={"/conference"}>Conference</Link>
        <span>Last rendered: {new Date().toLocaleTimeString()}</span>
      </div>
      <h1>Here are the Sessions!</h1>
      {
        data.sessions.map(({id, title, description, speakers, room, day, track}) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{title}</h3>
            {
              speakers && speakers.map((sp) => (
                <h3 key={sp.id} className={styles.titleText}>{sp.name}</h3>
              ))
            }
            <h5 className={styles.descText}>{description}</h5>
            <h4 className={styles.infoText}>Room: {room}</h4>
            <h4 className={styles.infoText}>Day: {day}</h4>
            <h4 className={styles.infoText}>Track: {track}</h4>
          </div>
        ))
      }
    </div>
  );
}
