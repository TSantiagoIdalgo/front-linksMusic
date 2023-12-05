import LandingInfo from './landingInfo/landingInfo';
import LandingAbout from './landingAbout/landingAbout';
import LandingDownload from './landingDownload/landingDownload';
import LandingHome from './landingHome/landingHome';

export default function Landing () {
  return (
    <main>
      <LandingHome/>
      <LandingInfo/>
      <LandingAbout/>
      <LandingDownload/>
    </main>
    )
}