"use client";
import Image from "next/image";
import styles from "./about.module.css";
import { mediaSize, useMediaQuery } from "../_shared/responsiveness";
const AboutPage = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image
          src="https://itarkett.sirv.com/Images/ipencil_arts/ipencil.jpeg"
          alt="Author"
          width={300}
          height={400}
        />
      </div>
      <div className={styles.text_container}>
        <h1
          style={{
            marginTop: 20,
            color: "darkorange",
            fontSize: isMobile ? 28 : 56,
          }}
        >
          About The Author
        </h1>
        <p style={{ lineHeight: 2 }}>
          My name is Isaiah Philip, also known as Ipencil, a 27 year old
          Nigerian self taught, mix media artist who specializes in charcoal and
          acrylic as his preferred mediums. With a unique artistic style that
          blends realism and abstraction, my work captivates viewers with its
          depth, emotion, and intricate details. Born with a passion for art, my
          journey as an artist began at age 17. Having honed my skills through
          years of practice and experimentation, constantly pushing the
          boundaries of my creativity, which I believe would resonate with your
          audience and enhance their experience in your gallery. With years of
          experience, my works have achieved both local and international
          recognition, captivating audiences from all walks of life. Collectors
          from around Africa, Dubai and the United States have been drawn to my
          unique artistic vision, resulting in international sales and over a
          100 commission.
        </p>
        <h1
          style={{
            marginTop: 40,
            color: "darkorange",
            fontSize: isMobile ? 28 : 56,
          }}
        >
          Mission Statement
        </h1>
        <p style={{ lineHeight: 2 }}>
          As a realistic charcoal artist, my mission is to capture the essence
          of the world with the stroke of my charcoal. I am dedicated to
          portraying the raw and unfiltered beauty of life, meticulously
          crafting each piece to reflect the subtleties of light and shadow. My
          art is a testament to the power of simplicity in black and white,
          inviting viewers to look beyond color and discover the depth of
          emotion and detail in the monochromatic spectrum. Through my work, I
          aim to connect with the audience on a profound level, offering a
          mirror to the soul of the subjects I depict. I am committed to honing
          my craft, preserving the timeless art of charcoal drawing, and sharing
          its unique beauty with the world
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
