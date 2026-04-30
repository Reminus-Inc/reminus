import { DownloadButton } from "@/app/_components/ui/download-button";
import { ContactButton } from "@/app/_components/ui/contact-button";

export function ArticleCta() {
  return (
    <div className="mx-auto mt-6 w-[88%] max-w-[760px] md:mt-8">
      <div className="flex flex-col items-center gap-7 bg-gray-100 px-6 py-14 md:flex-row md:justify-between md:gap-6 md:px-10 md:py-16">
        <p className="text-center text-base font-bold !leading-[1.7] tracking-wider text-gray-800 md:text-left md:text-lg">
          CTO不在やSaaSの課題に<br />お悩みの方はこちら
        </p>
        <div className="flex w-full flex-col lg:flex-row gap-2.5 md:w-auto md:flex-shrink-0">
          <DownloadButton
            size="medium"
            fullWidth
            href="/download"
            className="md:w-auto"
          />
          <ContactButton
            size="medium"
            fullWidth
            href="/contact"
            className="md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
