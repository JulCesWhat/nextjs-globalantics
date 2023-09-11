import Image from "next/image";
import OutStoryPic from "../images/home-image-1.jpg";
import styles from "./home.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={OutStoryPic}
          alt="Our story pic"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Welcome to the home page.</h1>
      <p className={styles.bgText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores?
      </p>
    </>
  );
}
