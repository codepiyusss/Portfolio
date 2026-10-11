import { profile } from "@/data/profile";
import { IconLink } from "./Icons";

/** Shows the resume PDF in the page. It is viewed here, not downloaded. */
export default function ResumeViewer() {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-md text-muted">
          My resume, right here. If the PDF doesn&apos;t show on your device, open it full screen.
        </p>
        <IconLink href={profile.resume} icon="external" newTab>
          Open full screen
        </IconLink>
      </div>
      <iframe
        src={`${profile.resume}#view=FitH`}
        title="Piyush Tiwari resume (PDF)"
        loading="lazy"
        className="h-[75vh] min-h-[480px] w-full rounded-md border border-line bg-white"
      />
    </div>
  );
}