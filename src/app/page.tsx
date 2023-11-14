
import BonusRule from "./(component)/(bonusRule)/bonusRule";
import CheckList from "./(component)/(checklist)";
import Header from "./(component)/(header)/header";
import Stats from "./(component)/(stat)/stat";
import SignUp from "./(component)/signUp/signUp";
import Spin from "./(component)/spin/spin";

export default function Home() {
  return (
    <main>
      <Header />
      <Stats />
      <BonusRule/>
      <SignUp/>
      <Spin/>
      <CheckList/>
    </main>
  );
}
