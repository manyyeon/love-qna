"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src={`/images/heart.png`}
          className="image-float"
          width={200}
          height={200}
          alt="Love QnA"
        />
        <div className="text-center m-4">
          {`This is Dayeon and Jason's QnA.
          If you answer the question, you
          can see my answer.`}
        </div>
        <Button onClick={() => router.push("/love-qna")}>Start</Button>
      </div>
    </div>
  );
}
