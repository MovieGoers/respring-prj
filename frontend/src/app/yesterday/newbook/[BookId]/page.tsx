import TopSection from "../components/TopSection"
import BottomSection from "../components/BottomSection"

export default function AutobiographyDetailPage({ params }: { params: { BookId: string } }) {
  console.log("Received BookId:", params.BookId) // BookId가 제대로 넘어오는지 확인

  return (
    <main className="min-h-screen bg-background text-foreground -my-14">
      <TopSection bookId={params.BookId} />
      <BottomSection bookId={params.BookId} />
    </main>
  )
}

