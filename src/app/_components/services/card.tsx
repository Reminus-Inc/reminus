import { ArrowRight, Check, X } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MotionDiv } from "../cto-partner/cc";
import { Service } from ".";
import React from 'react';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full cursor-pointer">
          <div className="mb-4">
            {React.createElement(service.icon, { className: "h-10 w-10 text-black" })}
          </div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4">
            {service.description}
          </p>
          <div className="flex items-center text-black font-medium group">
            <span>詳しく見る</span>
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-[95vw] h-[95dvh] md:h-[90dvh] p-0 border-0" autoFocus={false} onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogTitle className="hidden" />
        <div className="min-h-[160px] bg-gradient-to-b from-neutral-800 to-black flex items-center">
          <div className="w-full max-w-6xl mx-auto px-8 py-6 sm:py-8 md:py-12">
            <div className="flex items-start gap-6">
              {React.createElement(service.icon, { className: "w-14 h-14 shrink-0 text-white" })}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white">
                  {service.titleDialog ? service.titleDialog : service.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-neutral-200">{service.summary}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-auto flex-1">
          <div className="w-full max-w-6xl mx-auto px-8 py-6 sm:py-8 md:py-12">
            <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-12">{service.description}</p>

            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {service.points.map((point, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  <Check className="w-7 h-7 text-primary md:mt-1 shrink-0" />
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">{point.title}</h4>
                    <p className="text-sm sm:text-lg md:text-xl text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>

        <DialogClose asChild className="">
          <X className="absolute right-6 top-6 p-2.5 rounded-full hover:bg-white/10 transition-colors w-10 h-10 text-white shrink-0 cursor-pointer" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}