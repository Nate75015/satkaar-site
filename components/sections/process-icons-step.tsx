import Image from 'next/image';
import React from 'react'

type Props = {
  processSteps: {
    icon: string;
    label: string;
  }[];
  arrowIcon: string;
  title: string;
  description: string;
  subtitle?: string;
  flow?: string;
}

const ProcessIconsStep = ({ processSteps, arrowIcon, title, description, flow }: Props) => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-oso">
        <div className="flex flex-col items-center gap-8">
          {/* Header */}
          <h2 className="font-heading font-semibold text-[32px] md:text-[39px] text-black text-center">
            {title}
          </h2>
          <p className="font-body text-base text-black text-center">
            {description}
          </p>

          {/* Flow text */}
          {flow && (
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-8">
              <p className="font-heading font-medium text-[20px] md:text-[25px] text-gris-70">
                {flow}
              </p>
            </div>
          )}

          {/* Desktop: Horizontal layout with curved arrows */}
          <div className="hidden lg:flex items-center justify-center gap-4 lg:gap-8 w-full max-w-[1024px] mt-8">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Step */}
                <div className="flex flex-col items-center gap-6">
                  <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border border-dashed border-bleu-400 flex items-center justify-center">
                    <Image
                      src={step.icon}
                      alt={step.label}
                      width={54}
                      height={54}
                      className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
                      unoptimized
                    />
                  </div>
                  <p className="font-heading font-medium text-[18px] md:text-[25px] text-gris-60 text-center">
                    {step.label}
                  </p>
                </div>

                {/* Arrow between steps */}
                {index < processSteps.length - 1 && (
                  <div 
                    className="shrink-0 w-[100px] lg:w-[166px]"
                    style={{ 
                      transform: index % 2 === 0 ? "rotate(180deg) translateY(40px)" : "rotate(0deg)",
                    }}
                  >
                    <Image
                      src={arrowIcon}
                      alt=""
                      width={167}
                      height={37}
                      className="w-full"
                      unoptimized
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Tablet: 2x2 grid layout */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-8 w-full max-w-[450px] mt-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-4"
              >
                <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border border-dashed border-bleu-400 flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.label}
                    width={44}
                    height={44}
                    className="w-[36px] h-[36px] md:w-[44px] md:h-[44px]"
                    unoptimized
                  />
                </div>
                <p className="font-heading font-medium text-[18px] text-gris-60 text-center">
                  {step.label}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical layout */}
          <div className="flex sm:hidden flex-col items-center gap-6 w-full mt-4">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-[100px] h-[100px] rounded-full border border-dashed border-bleu-400 flex items-center justify-center">
                    <Image
                      src={step.icon}
                      alt={step.label}
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px]"
                      unoptimized
                    />
                  </div>
                  <p className="font-heading font-medium text-[18px] text-gris-60 text-center">
                    {step.label}
                  </p>
                </div>
                
                {/* Vertical connector */}
                {index < processSteps.length - 1 && (
                  <div className="w-px h-8 border-l border-dashed border-bleu-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessIconsStep