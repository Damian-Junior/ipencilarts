
import BonusRule from "./(component)/(bonusRule)/bonusRule";
import Header from "./(component)/(header)/header";
import Stats from "./(component)/(stat)/stat";

export default function Home() {
  return (
    <main>
      <Header />
      <Stats />
      <BonusRule/>
    </main>
  );
}
