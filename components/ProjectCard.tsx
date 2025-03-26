import { ProjectImage } from "@/components/MyImage";
import { Github, LinkIcon } from "@/components/socialLinks";

export default function ProjectCard({
  title,
  description,
  githubLink,
  liveLink,
  imageLink,
}: {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  imageLink: string;
}) {
  return (
    <div
      className="w-full flex rounded-md"
      style={{
        backgroundColor: "var(--bg)",
      }}
    >
      <ProjectImage imageLink={imageLink} />
      <div className="py-2 px-4 flex flex-col gap-2 sm:w-[26rem] w-[40rem]">
        <div className="flex justify-between">
          <p className="text-xl">{title}</p>
          <div className="flex gap-2">
            <Github link={githubLink} />
            <LinkIcon link={liveLink} />
          </div>
        </div>
        <p className="line-clamp-3 text-sm">{description}</p>
      </div>
    </div>
  );
}
