import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../../auth/[...nextauth]/option";
import { db } from "@/lib/db";
import { JobProfile, Status } from "@prisma/client";
type Params = {
  status: string;
};
export async function GET(req: NextRequest, context: { params: Params }) {
  try {
    const status = String(context.params.status);
    console.log(status == Status.PENDING.toString().toLowerCase());
    const session = await getServerSession(options);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthenticated Access!" },
        { status: 401 }
      );
    }
    if (session.user.role != "Jobseeker") {
      return NextResponse.json(
        { error: "Unauthenticated Access!" },
        { status: 401 }
      );
    }
    let jobseeker = await db.jobSeeker.findUnique({
      where: { username: session.user.username },
    });
    if (!jobseeker) {
      return NextResponse.json(
        { error: "Unauthenticated Access!" },
        { status: 401 }
      );
    }
    let jobs: JobProfile[];
    if (status == "applied") {
      jobs = await db.jobProfile.findMany({
        where: {
          applications: {
            some: { jobSeekerId: jobseeker.id },
          },
        },
        include: {
          applications: {
            where: { jobSeekerId: jobseeker.id },
          },
        },
      });
    } else {
      jobs = await db.jobProfile.findMany({
        where: {
          applications: {
            some: {
              jobSeekerId: jobseeker.id,
              status:
                status == "accepted"
                  ? Status.ACCEPTED
                  : status == "rejected"
                  ? Status.REJECTED
                  : Status.PENDING,
            },
          },
        },
        include: {
          applications: {
            where: { jobSeekerId: jobseeker.id },
          },
        },
      });
    }
    return NextResponse.json({ status: status, jobs: jobs }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
