"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { formatDistanceToNowStrict } from "date-fns";
import { ko } from "date-fns/locale";
import { getAllSubscribersActivities, Post } from "@/lib/api/subscribe";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { TodaySkeletonCarousel } from "./ui/TodaySkeletonCarousel";

const getRandomImage = () => {
  const imageNumber = Math.floor(Math.random() * 9) + 1;
  return `/corgis/placeholder${imageNumber}.jpg`;
};

export default function FollowedPosts() {
  const { userNickname } = useAuth(true);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const CATEGORY_MAP: Record<string, string> = {
    INFORMATION_SHARING: "정보 공유",
    QUESTION_DISCUSSION: "고민/질문",
  };

  useEffect(() => {
    if (!userNickname) return;

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const result = await getAllSubscribersActivities();
        const formattedPosts = result.map((post) => ({
          ...post,
          category: CATEGORY_MAP[post.category] || post.category,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("구독자 활동 데이터를 불러오지 못했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userNickname]);

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case "전체":
        return "bg-[#dfeaa5] text-[#638d3e]";
      case "고민/질문":
        return "bg-[#96b23c] text-white";
      case "정보 공유":
        return "bg-[#f2cedd] text-[#665048]";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 50000);
    return () => clearInterval(interval);
  }, [api]);

  if (loading) {
    return <TodaySkeletonCarousel />;
  }

  if (!posts || posts.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">
        아직 구독한 사람이 없습니다.
      </p>
    );
  }

  return (
    <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.postId}>
            <Link href={`/today/${post.postId}`} className="block">
              <Card className="shadow-none border-none hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>{post.authorNickname}</AvatarFallback>
                        <AvatarImage
                          src={post.authorImage}
                          alt={post.authorNickname}
                        />
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">
                          {post.authorNickname}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDistanceToNowStrict(new Date(post.createdAt), {
                            addSuffix: true,
                            locale: ko,
                          })}
                        </p>
                      </div>
                    </div>
                    <Badge
                      className={`text-xs px-2 py-1 rounded-lg shadow-sm ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-sm mb-1">{post.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" /> {post.likes}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="py-2 text-center">
        {posts.map((_, index) => (
          <span
            key={index}
            className={`inline-block h-2 w-2 mx-1 rounded-full ${
              index === current - 1 ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
}
