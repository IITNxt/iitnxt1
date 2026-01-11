export const runtime = 'edge';

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
    return <div>Opportunity not found</div>;
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Dynamic Content based on opportunityId */}
      {opportunityId === "careerprep" && <JobsSection />}
      {opportunityId === "programs" && <InternshipsSection />}
      {opportunityId === "projects" && <ProjectsSection />}
      {opportunityId === "startup-mentorship" && <MentorshipSection />}
      {opportunityId === "workshops" && <WorkshopsSection />}

      {/* Fallback for unknown IDs - strictly typed check above handles valid cases but good for safety */}
      {!["careerprep", "programs", "projects", "startup-mentorship", "workshops"].includes(opportunityId) && (
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold">Opportunity Not Found</h1>
          <p className="mt-4">The opportunity "{rawId}" does not exist.</p>
        </div>
      )}
    </div>
  );
}
