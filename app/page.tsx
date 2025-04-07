import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RepoStats from "@/components/ui/repostats";
import { ThemeToggle } from "@/components/ui/themetoggle";
import {
  Github,
  Star,
  GitFork,
  Code2,
  Terminal,
  Zap,
  Users,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Code2 className="h-6 w-6" />
            <span className="text-xl font-bold">neodb</span> */}
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://github.com/neodbio/neodb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        {/* <section className="text-center w-full py-12 md:py-24 lg:py-32 xl:py-48"> */}
        <section className="text-center w-full  mx-auto">
          <div className="container px-4 md:px-6">
            {/* <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"> */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 space-y-4">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="py-5">
                    <Badge variant="outline" className="w-fit">
                      Open Source
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    NeoDB
                  </h1>
                  <div className="max-w-[600px] text-muted-foreground md:text-base">
                    <p>intelligent data - the better way to query your data.</p>
                  </div>
                </div>
                {/* <div className="flex flex-col gap-2 min-[400px]:flex-row"> */}
                <div>
                  <Button variant="outline" size="lg" asChild>
                    <Link
                      href="https://github.com/neodbio/neodb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      Star on GitHub
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {/* <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>1.2k stars</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>234 forks</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>45 contributors</span>
                  </div> */}
                  {/* <div>
                    <RepoStats />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        {/* <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            <p className="text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} OpenProject. All rights
              reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/username/project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://discord.gg/invite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <span className="sr-only">Discord</span>
            </Link>
          </div>
        </div> */}
      </footer>
    </div>
  );
}
