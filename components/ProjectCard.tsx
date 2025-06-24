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
      className="flex flex-col rounded-md w-[23rem]"
      style={{
        backgroundColor: "var(--bg)",
      }}
    >
      <ProjectImage imageLink={imageLink} />
      <div className="pb-4 pt-2 px-4 flex flex-col gap-1">
        <div className="flex justify-between">
          <p className="text-2xl font-medium">{title}</p>
          <div className="flex gap-2 items-center">
            <Github link={githubLink} />
            <LinkIcon link={liveLink} />
          </div>
        </div>
        <p className="line-clamp-3 text-sm">{description}</p>
      </div>
    </div>
  );
}
