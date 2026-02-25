import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Link } from "@tanstack/react-router";
import { BadgeQuestionMarkIcon } from "lucide-react";
import { Route as IndexRoute } from "@/routes/index";

export default function ComingSoon() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <BadgeQuestionMarkIcon />
        </EmptyMedia>
        <EmptyTitle>Nothing Here Yet</EmptyTitle>
        <EmptyDescription>Keep an eye out!</EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button asChild>
          <Link to={IndexRoute.to}>Go Home</Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
