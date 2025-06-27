// import { getPostBySlug } from "@/lib/mdx";
// import { MyImage } from "@/components/MyImage";
// import Link from "next/link";

import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  return (
    <div className="w-full flex">
      <div className="sm:w-[55rem] w-full m-auto p-4 flex flex-col gap-6 border border-[var(--bg)] rounded-sm">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">
            10 Must-Try Open-Source GitHub Projects to Level Up Your Back-End
            Skills in 2025
          </h2>
          <div className="flex gap-2 text-sm items-center">
            <Image
              width={25}
              height={25}
              className="rounded-full"
              src={"/portfolio_pic.png"}
              alt="anupraj-image"
            />
            <div className="flex gap-2">
              <Link
                href="https://x.com/Anupraj_varma"
                className="cursor-pointer underline underline-offset-4"
              >
                @Anupraj
              </Link>
              <p className="">| 2025-04-25</p>
            </div>
          </div>
        </div>
        <p>
          <strong>Back-end development</strong> is the backbone of modern
          applications, powering everything from APIs to databases. If
          you&apos;re looking to sharpen your skills, contributing to
          open-source projects on GitHub is a game-changer. Not only do you gain
          hands-on experience, but you also collaborate with global communities
          and build a portfolio that stands out.
        </p>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">
            Why Contribute to Open-Source Back-End Projects?
          </h2>
          <p>
            Before we dive into the list, let&apos;s talk about why open-source
            is a fantastic way to grow as a back-end developer
          </p>
        </div>
        <ul className="list-disc px-4">
          <li>
            <strong>Real-World Experience:</strong> Work on production-grade
            codebases used by thousands.
          </li>
          <li>
            <strong>Community Learning:</strong> Collaborate with experienced
            developers and learn best practices.
          </li>
          <li>
            <strong>Skill Diversification:</strong> Tackle APIs, databases,
            authentication, and more.
          </li>
          <li>
            <strong>Portfolio Boost:</strong> Showcase your contributions to
            impress employers.
          </li>
        </ul>

        <p>
          Here are 10 open-source GitHub projects that will take your back-end
          skills to the next level. These projects expose you to cutting-edge
          technologies and real-world challenges, making you a more versatile
          developer. Plus, contributing to open-source builds your GitHub
          profile, which recruiters love to see.
        </p>

        <p>
          Whether you&apos;re a beginner or a seasoned coder, these projects
          offer practical ways to dive into real-world coding challenges, so
          let&apos;s explore them.
        </p>

        <ol className="list-decimal p-4">
          <li>
            <h3 className="text-xl font-semibold">Supabase</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/supabase/supabase"
                className="underline underline-offset-4"
                target="_blank"
              >
                supabase/supabase
              </a>
            </p>
            <p>
              <strong>What It Is:</strong> An open-source alternative to
              Firebase with Postgres, APIs, authentication, and real-time
              features.
            </p>
            <p>
              <strong>Why Contribute?</strong> Learn to build scalable back-end
              systems with PostgreSQL, REST APIs, and real-time logic.
            </p>
            <p>
              <strong>Skills You&apos;ll Gain:</strong>
            </p>
            <ul className="list-disc px-4">
              <li>PostgreSQL and database design</li>
              <li>API development</li>
              <li>Authentication workflows</li>
              <li>Real-time data with WebSockets</li>
            </ul>
          </li>

          <li>
            <h3>Strapi</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/strapi/strapi"
                target="_blank"
                className="underline underline-offset-4"
              >
                strapi/strapi
              </a>
            </p>
            <p>
              <strong>What It Is:</strong> A headless CMS for building
              customizable APIs quickly.
            </p>
            <p>
              <strong>Why Contribute?</strong> Ideal for mastering JavaScript
              back-end development using Node.js.
            </p>
            <p>
              <strong>Skills You&apos;ll Gain:</strong>
            </p>
            <ul className="list-disc px-4">
              <li>Node.js and Express</li>
              <li>REST and GraphQL APIs</li>
              <li>Database integrations (MongoDB, SQLite)</li>
              <li>Middleware development</li>
            </ul>
          </li>

          <li>
            <h3>Appwrite</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/appwrite/appwrite"
                target="_blank"
                className="underline underline-offset-4"
              >
                appwrite/appwrite
              </a>
            </p>
            <p>
              <strong>What It Is:</strong> A secure, open-source
              backend-as-a-service platform.
            </p>
            <p>
              <strong>Why Contribute?</strong> Learn modern back-end practices
              like API security and cloud-native development.
            </p>
            <p>
              <strong>Skills You&apos;ll Gain:</strong>
            </p>
            <ul className="list-disc px-4">
              <li>API design and security</li>
              <li>Docker and containerization</li>
              <li>Cloud-native development</li>
              <li>PHP and TypeScript</li>
            </ul>
          </li>

          <li>
            <h3>FastAPI</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/tiangolo/fastapi"
                target="_blank"
                className="underline underline-offset-4"
              >
                tiangolo/fastapi
              </a>
            </p>
            <p>
              <strong>What It Is:</strong> A high-performance Python framework
              for building APIs.
            </p>
            <p>
              <strong>Why Contribute?</strong> Deepen your understanding of
              async programming and API development.
            </p>
            <p>
              <strong>Skills You&apos;ll Gain:</strong>
            </p>
            <ul className="list-disc px-4">
              <li>Python and async/await</li>
              <li>API documentation with OpenAPI</li>
              <li>Pydantic for data validation</li>
              <li>Performance optimization</li>
            </ul>
          </li>

          <li>
            <h3>NocoBase</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/nocobase/nocobase"
                target="_blank"
                className="underline underline-offset-4"
              >
                nocobase/nocobase
              </a>
            </p>
            <p>
              <strong>What It Is:</strong> A no-code/low-code platform for
              internal tools.
            </p>
            <p>
              <strong>Why Contribute?</strong> Learn to build data-driven,
              enterprise-grade backend systems.
            </p>
            <p>
              <strong>Skills You&apos;ll Gain:</strong>
            </p>
            <ul className="list-disc px-4">
              <li>JavaScript/TypeScript</li>
              <li>Data modeling</li>
              <li>Plugin architecture</li>
              <li>Scalable backend design</li>
            </ul>
          </li>

          <li>
            <h3>PocketBase</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/pocketbase/pocketbase"
                target="_blank"
                className="underline underline-offset-4"
              >
                pocketbase/pocketbase
              </a>
            </p>
            <p>
              <strong>What It Is:</strong> A lightweight backend framework
              written in Go.
            </p>
            <p>
              <strong>Why Contribute?</strong> Great for learning Go and
              building real-time backend systems.
            </p>
            <p>
              <strong>Skills You&apos;ll Gain:</strong>
            </p>
            <ul className="list-disc px-4">
              <li>Go programming</li>
              <li>SQLite database management</li>
              <li>REST APIs</li>
              <li>Real-time features</li>
            </ul>
          </li>

          <li>
            <h3>Directus</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/directus/directus"
                target="_blank"
                className="underline underline-offset-4"
              >
                directus/directus
              </a>
            </p>
            <p>
              <strong>What It Is:</strong> Turns any SQL database into a
              headless CMS.
            </p>
            <p>
              <strong>Why Contribute?</strong> Learn API-driven development and
              role-based access control.
            </p>
            <p>
              <strong>Skills You&apos;ll Gain:</strong>
            </p>
            <ul className="list-disc px-4">
              <li>Node.js and TypeScript</li>
              <li>SQL databases</li>
              <li>RBAC (Role-Based Access Control)</li>
              <li>API-driven development</li>
            </ul>
          </li>

          <li>
            <h3>Parse Server</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/parse-community/parse-server"
                target="_blank"
                className="underline underline-offset-4"
              >
                parse-community/parse-server
              </a>
            </p>
            <p>
              <strong>What It Is:</strong> An open-source backend framework for
              scalable apps.
            </p>
            <p>
              <strong>Why Contribute?</strong> Learn cloud functions, push
              notifications, and database integrations.
            </p>
            <p>
              <strong>Skills You&apos;ll Gain:</strong>
            </p>
            <ul className="list-disc px-4">
              <li>Node.js and MongoDB</li>
              <li>Cloud functions</li>
              <li>Authentication and authorization</li>
              <li>Scalability techniques</li>
            </ul>
          </li>

          <li>
            <h3>Hasura</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/hasura/graphql-engine"
                target="_blank"
                className="underline underline-offset-4"
              >
                hasura/graphql-engine
              </a>
            </p>
            <p>
              <strong>What It Is:</strong> A GraphQL engine that connects to
              databases.
            </p>
            <p>
              <strong>Why Contribute?</strong> Master GraphQL and
              database-driven APIs.
            </p>
            <p>
              <strong>Skills You&apos;ll Gain:</strong>
            </p>
            <ul className="list-disc px-4">
              <li>GraphQL and Apollo</li>
              <li>PostgreSQL optimization</li>
              <li>API security</li>
              <li>Haskell (optional)</li>
            </ul>
          </li>

          <li>
            <h3>OPAL</h3>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/permitio/opal"
                target="_blank"
                className="underline underline-offset-4"
              >
                permitio/opal
              </a>
            </p>
            <p>
              <strong>What It Is:</strong> An open-source authorization layer
              for managing permissions.
            </p>
            <p>
              <strong>Why Contribute?</strong> Learn fine-grained access control
              and integrate with OPA.
            </p>
            <p>
              <strong>Skills You&apos;ll Gain:</strong>
            </p>
            <ul className="list-disc px-4">
              <li>Python and policy management</li>
              <li>Real-time authorization</li>
              <li>Distributed systems</li>
              <li>Integration with Open Policy Agent</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
