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
      className="w-full flex gap-3"
      style={{
        backgroundColor: "var(--bg)",
      }}
    >
      <ProjectImage imageLink={imageLink} />
      <div className="py-2 px-4 flex flex-col gap-2 rounded-md">
        <p className="text-xl">{title}</p>
        <p className="line-clamp-2 text-sm">{description}</p>
        <div className="relative">
          <div className="flex absolute right-0 w-[67px] gap-4">
            <Github link={githubLink} />
            <LinkIcon link={liveLink} />
          </div>
        </div>
      </div>
    </div>
  );
}
