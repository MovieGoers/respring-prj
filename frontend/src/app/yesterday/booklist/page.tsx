"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/custom/TabGreen";
import BookShelf from "../components/BookShelf";
import StoryShelf from "../components/StoryShelf";
import { useSearchParams } from "next/navigation";

export default function BookList() {
  const userId = "beb9ebc2-9d32-4039-8679-5d44393b7252";
  const searchParams = useSearchParams();
  const tab = searchParams?.get("tab") || "books";

  return (
    <div className="flex flex-col items-center w-full p-4">
      <Tabs defaultValue={tab}>
        <TabsList className="flex justify-center items-center mb-4 space-x-4">
          <TabsTrigger value="books">봄날의 서재</TabsTrigger>
          <TabsTrigger value="stories">나의 글조각</TabsTrigger>
        </TabsList>

        <TabsContent value="books">
          <BookShelf userId={userId} />
        </TabsContent>

        <TabsContent value="stories">
          <StoryShelf userId={userId} />
        </TabsContent>
      </Tabs>
    </div>
  );
}