import { Link, useMatches } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import React from "react";

export default function Breadcrumbs() {
  const matches = useMatches({
    select: (matches) => {
      return matches
        .filter((match) => match.staticData?.getTitle)
        .map((m) => {
          return {
            title: m.staticData?.getTitle?.() || "No Title",
            to: m.pathname,
          };
        });
    },
  });
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {matches.map((crumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {index < matches.length - 1 ? (
                <>
                  <BreadcrumbLink
                    asChild
                    className="max-w-20 truncate md:max-w-none"
                  >
                    <Link to={crumb.to}>{crumb.title}</Link>
                  </BreadcrumbLink>
                </>
              ) : (
                <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                  {crumb.title}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index !== matches.length - 1 ? <BreadcrumbSeparator /> : null}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
