import { PageTransition } from '@/components/animations/PageTransition';
import SmoothScroll from '@/components/animations/SmoothScroll';
import Preloader from '@/components/ui/Preloader';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import { HeroSection } from '@/components/sections/HeroSection';
import PainPointsSection from '@/components/sections/PainPointsSection';
import { IntegrationsMarquee } from '@/components/sections/IntegrationsMarquee';
import SolutionSection from '@/components/sections/SolutionSection';
import CurriculumSection from '@/components/sections/CurriculumSection';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import ProcessSection from '@/components/sections/ProcessSection';
import ResultsSection from '@/components/sections/ResultsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      
      <PageTransition>
        <main id="main-content" className="min-h-screen relative bg-[#0a0a0a]">
          <HeroSection />
          <IntegrationsMarquee />
          <PainPointsSection />
          <SolutionSection />
          <CurriculumSection />
          <LogoMarquee />
          <ResultsSection />
          <ProcessSection />
          <AboutSection />
          <CTASection />
          <FAQSection />
          <Footer />
        </main>
      </PageTransition>
      
      <BackToTop />
    </SmoothScroll>
  );
}
