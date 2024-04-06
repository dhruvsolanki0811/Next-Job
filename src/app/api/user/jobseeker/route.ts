import { db } from "@/lib/db";
import { uploadFileFirebase } from "@/lib/firebase";
import excludePassword from "@/utils/utils";
import { jobSeekerSchema } from "@/utils/zodValidationUtils";
import { hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const jobSeekers = await db.jobSeeker.findMany();
    const jobseekerWithoutPassword = jobSeekers.map((jobSeeker) =>
      excludePassword(jobSeeker)
    );

    return NextResponse.json({ jobseekers: jobseekerWithoutPassword });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
export async function POST(req: NextRequest) {
  try {
    let parsedBody;
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const { resume, profilePic, skills, yearsOfExperience } = body;
    parsedBody = await jobSeekerSchema.parseAsync(body);
    let uploadedProfilePic =
      profilePic && profilePic instanceof File
        ? await uploadFileFirebase("jobseeker", "profilepic", profilePic)
        : null;
    let uploadedResume =
      resume && resume instanceof File
        ? await uploadFileFirebase("jobseeker", "resume", resume)
        : null;

    const existingEmail = await db.jobSeeker.findUnique({
      where: { email: parsedBody.email },
    });

    if (existingEmail) {
      return NextResponse.json(
        { error: "Email Already Exists!" },
        { status: 403 }
      );
    }

    const existingUsername = await db.jobSeeker.findUnique({
      where: { username: parsedBody.username },
    });

    if (existingUsername) {
      return NextResponse.json(
        { error: "Username Already Exists!" },
        { status: 403 }
      );
    }
    const hashedPassword = await hash(parsedBody.password, 10);
    const newUser = await db.jobSeeker.create({
      data: {
        email: parsedBody.email,
        password: hashedPassword,
        username: parsedBody.username,
        firstName: parsedBody.firstName,
        lastName: parsedBody.lastName,
        description: parsedBody.description,
        phoneNumber: parsedBody.phoneNumber,
        yearsOfExperience: parseInt(String(yearsOfExperience)),
        skills: JSON.parse(String(skills)),
        resume: uploadedResume ?? null,
        profilePic: uploadedProfilePic ?? null,
      },
    });
    const { password: savedPassword, ...restBody } = newUser;
    return NextResponse.json(
      { message: "Jobseeker Added", jobseeker: restBody },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error && err.name == "ZodError") {
      return NextResponse.json(
        { error: err || "Unknown error" },
        { status: 403 }
      );
    }
    console.log(err);
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
