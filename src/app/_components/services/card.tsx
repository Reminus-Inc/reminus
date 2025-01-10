import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Check, X } from "lucide-react";
import { MotionDiv } from "../hero/cc";
import { Service } from ".";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="hover-card-animation h-full flex flex-col">
          <CardHeader>
            <service.icon className="w-10 h-10 mb-2" />
            <CardTitle>{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 min-h-[72px]">{service.description}</p>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-[95vw] h-[95dvh] md:h-[90dvh] p-0 border-0">
        <DialogTitle className="hidden" />
        <div className="min-h-[160px] bg-gradient-to-b from-neutral-800 to-black flex items-center">
          <div className="w-full max-w-6xl mx-auto px-8 py-6 sm:py-8 md:py-12">
            <div className="flex items-start gap-6">
              <service.icon className="w-14 h-14 shrink-0 text-white" />
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white">
                  {service.titleDialog ? service.titleDialog :  service.title}
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
          <X className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 transition-colors w-7 h-7 text-white mt-1 shrink-0" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
