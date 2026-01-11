// src/app/(main)/opportunities/[opportunityId]/page.tsx

import JobsSection from "@/components/opportunities/jobs";
import InternshipsSection from "@/components/opportunities/programs";
import ProjectsSection from "@/components/opportunities/projects";
import MentorshipSection from "@/components/opportunities/startup-mentorship";
import WorkshopsSection from "@/components/opportunities/workshops";

interface PageProps {
  params: Promise<{
    opportunityId: string;
  }>;
}

export default async function OpportunityPage({ params }: PageProps) {
  // normalize to lowercase for safe matching
  const { opportunityId: rawId } = await params;
  const opportunityId = rawId.toLowerCase();

  if (!opportunityId) {
    return <div className="p-6 text-red-500">Invalid opportunity ID</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {opportunityId.replace("-", " ")} Opportunity
      </h1>

      {opportunityId === "jobs" && <JobsSection />}
      {opportunityId === "internships" && <InternshipsSection />}
      {opportunityId === "projects" && <ProjectsSection />}
      {opportunityId === "startup-mentorship" && <MentorshipSection />}
      {opportunityId === "workshops" && <WorkshopsSection />}

      {/* fallback */}
      {!["jobs", "internships", "projects", "startup-mentorship", "workshops"].includes(opportunityId) && (
        <p className="text-gray-600 mt-4">
          Sorry, we don’t have a section for <strong>{opportunityId}</strong> yet.
        </p>
      )}
    </div>
  );
}
