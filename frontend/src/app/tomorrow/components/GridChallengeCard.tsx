import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Heart, Users } from "lucide-react";

interface GridChallengeCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  like: number;
  participants: number;
  tags: string[];
  status: "UPCOMING" | "ONGOING" | "ENDED";
  // 추가: 사용자가 해당 챌린지에 참여 중인지 여부
  isParticipating?: boolean;
}

export function GridChallengeCard({
  id,
  title,
  description,
  image,
  like,
  participants,
  tags,
  status,
  isParticipating = false,
}: GridChallengeCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tomorrow/${id}`);
  };

  // 진행 중 상태에서, 사용자가 참여하지 않았다면 "시작하기", 참여 중이면 "이어하기"
  const renderButton = () => {
    if (status === "ONGOING") {
      return (
        <Button
          size="sm"
          className="bg-green-500 hover:bg-green-700 text-white text-[10px] xs:text-xs sm:text-sm px-1 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-2 h-auto font-laundrygothicregular"
        >
          {isParticipating ? "이어하기" : "시작하기"}
        </Button>
      );
    }
    if (status === "UPCOMING") {
      return (
        <Button
          size="sm"
          className="bg-gray-300 text-gray-600 cursor-not-allowed text-[10px] xs:text-xs sm:text-sm px-1 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-2 h-auto font-laundrygothicregular"
        >
          준비 중
        </Button>
      );
    }
    if (status === "ENDED") {
      return (
        <Button
          size="sm"
          disabled
          className="bg-gray-400 text-white text-[10px] xs:text-xs sm:text-sm px-1 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-2 h-auto font-laundrygothicregular"
        >
          종료됨
        </Button>
      );
    }
  };

  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-white relative"
      onClick={handleClick}
    >
      <div className="relative w-full aspect-[4/3]">
        <Image src={image || "/placeholder.webp"} alt={title} fill className="object-cover" />
      </div>

      <div className="p-2 xs:p-3 sm:p-4 md:p-5">
        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-600 line-clamp-2 mb-1 xs:mb-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-1 mb-1 xs:mb-2 md:mb-3">
          {tags.slice(0, 1).map((tag, index) => (
            <span
              key={index}
              className="px-1 xs:px-2 py-0.5 bg-gray-100 rounded-full text-[10px] xs:text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-1 xs:mt-2 md:mt-3">
          <div className="flex items-center gap-2 xs:gap-3 text-[10px] xs:text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-0.5 xs:gap-1">
              <Heart className="w-3 h-3 xs:w-4 xs:h-4 text-red-500" />
              <span>{like}</span>
            </div>
            <div className="flex items-center gap-0.5 xs:gap-1">
              <Users className="w-3 h-3 xs:w-4 xs:h-4 text-blue-500" />
              <span>{participants}</span>
            </div>
          </div>

          {renderButton()}
        </div>
      </div>
    </Card>
  );
}
