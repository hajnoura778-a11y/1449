import { ArrowLeft } from "lucide-react";

interface CtaSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function CtaSection({ onPrimaryClick }: CtaSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand-dark p-10 text-center text-cream-base shadow-glow md:p-16">
          {/* نمط خفيف */}
          <div className="absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold md:text-4xl text-cream-base">
            لا تتنازل عن حقك.. وثّق شكواك الآن بأسلوب رسمّي ومعتمد
          </h2>
          
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-cream-base/85 leading-relaxed">
            خطوات بسيطة وسريعة لتقديم كافة التفاصيل والمستندات للحفاظ على حقوقك التجارية.
          </p>
          
          <div className="mt-8">
            <a
              href="#complaint-form"
              onClick={onPrimaryClick}
              className="
                inline-flex items-center gap-2.5 rounded-xl 
                bg-cream-base px-8 py-3.5 
                text-base font-bold text-brand-dark 
                shadow-lg 
                transition-all duration-300
                hover:bg-white hover:scale-105 hover:shadow-xl
                active:scale-95
              "
            >
              ابدأ تقديم الشكوى الآن
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}