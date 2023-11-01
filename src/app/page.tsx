
import BonusRule from "./(component)/(bonusRule)/bonusRule";
import Header from "./(component)/(header)/header";
import Stats from "./(component)/(stat)/stat";
import SignUp from "./(component)/signUp/signUp";

export default function Home() {
  return (
    <main>
      <Header />
      <Stats />
      <BonusRule/>
      <SignUp/>
    </main>
  );
}
