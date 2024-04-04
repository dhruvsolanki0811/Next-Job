import { db } from "@/lib/db";
import { uploadFileFirebase } from "@/lib/firebase";
import excludePassword from "@/utils/utils";
import { hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const organizationSchema = z.object({
  email: z
    .string({ required_error: "Email is must" })
    .email({ message: "Invalid email format" }),
  password: z
    .string({ required_error: "Password is must" })
    .min(6, { message: "Password must be at least 6 characters long" }),
  username: z
    .string({ required_error: "Username is must" })
    .min(4, { message: "Username must be at least 4 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  name: z
    .string({ required_error: "name is must" })
    .min(2, { message: "Name must be at least 2 characters long" }),
  location: z
    .string({ required_error: "Location is must" })
    .min(6, { message: "Location is must" }),
  website: z.string().url({ message: "Invalid URL format" }).optional(),
  overview: z
    .string({ required_error: "Overview is must" })
    .min(1, { message: "Overview is required" }),
  foundedAt: z
    .string({ required_error: "Founded is must" })
    .min(1, { message: "Founded date is required" }),
});

export async function GET(req:NextRequest) {
  try {
    const organizations=await db.organization.findMany()
    const organizationsWithoutPassword = organizations.map(organization=>excludePassword(organization))

    return NextResponse.json({organizations:organizationsWithoutPassword})
  } catch (err) {
    
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const body = Object.fromEntries(formData);

    let parsedBody;
    // let profiePic;
    const { profilePic } = body;

    parsedBody = await organizationSchema.parseAsync(body);

    const {
      email,
      password,
      username,
      name,
      location,
      website,
      overview,
      foundedAt,
    } = parsedBody;

    let pfp =
      profilePic instanceof File
        ? await uploadFileFirebase("organization", "profilepic", profilePic)
        : null;
    const existingEmail = await db.organization.findUnique({
      where: { email: email },
    });

    if (existingEmail) {
      return NextResponse.json(
        { error: "Email Already Exists!" },
        { status: 409 }
      );
    }

    const existingUsername = await db.organization.findUnique({
      where: { username: username },
    });

    if (existingUsername) {
      return NextResponse.json(
        { error: "Username Already Exists!" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.organization.create({
      data: {
        email: email,
        password: hashedPassword,
        username: username,
        name: name,
        location: location,
        website: website ?? null,
        overview: overview,
        foundedAt: foundedAt,
        profilePic: pfp ?? null,
      },
    });
    const { password: savedPassword, ...rest } = newUser;
    return NextResponse.json(
      { message: "Organization Added", organization: rest },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error && err.name == "ZodError") {
      // Handle ZodError

      return NextResponse.json(
        { error: err || "Unknown error" },
        { status: 400 }
      );
    }
    console.log(err);
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
