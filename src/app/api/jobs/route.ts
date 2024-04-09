import { db } from "@/lib/db";
import { JobProfileSchema } from "@/utils/zodValidationUtils";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/option";
import excludePassword from "@/utils/utils";
export async function GET(req: NextRequest) {
    try { 
      const jobProfiles= await db.jobProfile.findMany({include:{organization:{select:
        {
          email: true,
          username: true,
          name: true,
          location: true,
          website: true,
          overview: true,
          foundedAt:true,
          profilePic: true,
      }
      }}});
      
      return NextResponse.json({ jobProfile: jobProfiles });
    } catch (err) {
      return NextResponse.json({ message: err }, { status: 500 });
    }
  }
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(options);

    if (session) {
      if (session.user.role != "Organization") {
        return NextResponse.json(
          { error: "Unauthenticated Access!" },
          { status: 401 }
        );
      }
      const organization=await db.organization.findUnique({where:{username:session.user.username}})
      if (!organization) {
        return NextResponse.json(
          { error: "Unauthenticated Access!" },
          { status: 401 }
        );
      }
      const body = await req.json();
      let parsedBody = await JobProfileSchema.parseAsync(body);

        const jobProfile = await db.jobProfile.create({
          data: {
            ...parsedBody,
            organizationId:organization.id
          },
        });
        const withoutPasswordOrg=excludePassword(organization)
        const respBody={...jobProfile,...withoutPasswordOrg}
      return NextResponse.json({ message:"Job created successfully!",jobprofile:respBody},{status:201});
    } else {
      return NextResponse.json(
        { error: "Unauthenticated Access!" },
        { status: 401 }
      );
    }
  } catch (err) {
    if (err instanceof Error && err.name == "ZodError") {
      // Handle ZodError

      return NextResponse.json(
        { error: err || "Unknown error" },
        { status: 403 }
      );
    }
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
